import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
let Registeration = () => {
    let [state,setState] =useState({userName:"",email:"",password:""});
    function handleChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
        // console.log(state);
    }
    let [err,setErr]=useState({});
    function validateForm(){
        let settingErrors={};
        let valid=true;
        if(!state.userName){
            settingErrors.userName="Name is required";
            valid=false;
        }
        else if(state.userName.length<3){
            settingErrors.userName="Name should be atleast 3 characters";
            valid=false;
        }
        if(!state.email){
            settingErrors.email="Email is required";
            valid=false;
        }
        else if(!state.email.includes("@")){
            settingErrors.email="Email is not valid";
            valid=false;
        }
        if(!state.password){
            settingErrors.password="Password is required";
            valid=false;
        }
        else if (!/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(state.password)) {
            settingErrors.password = "Password must be alphanumeric.";
            valid = false;
        }
        else if(state.password.length<6){
            settingErrors.password="Password should be atleast 6 characters";
            valid=false;
        }
        console.log("Alphanumeric test result:", /^[a-zA-Z0-9]+$/.test(state.password));
        setErr(settingErrors);
        return valid;
    }
    function submitForm(e){
        e.preventDefault();
        if(validateForm()){
            alert("Registration successfull");
            window.sessionStorage.setItem("details",JSON.stringify(state));
            window.location.href="login";
            setState({ userName: "", email: "", password: "" });
        }
        else{
            alert("Registration failed");
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h1 style={styles.h1}>Registration Form</h1>
                <form action="">
                <label htmlFor="text" style={styles.label}>Name:</label>
                    <input
                        type="text"
                        name="userName"
                        id="text"
                        value={state.userName}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Enter your name"
                    />
                  {err.userName && <p style={styles.error}>{err.userName}</p>}
                    <br/>
                    <br/>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={state.email}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Enter your email"
                    />
                    {err.email && <p style={styles.error}>{err.email}</p>}<br/>
                    <label htmlFor="password" style={styles.label}>Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={state.password}
                        onChange={handleChange}
                        style={styles.input}
                        placeholder="Enter your password"
                    />
                    <h6 style={styles.h6}>Password must contain one alphabet and digit</h6>
                    {err.password && <p style={styles.error}>{err.password}</p>}
                    <br/>
                    <input type="submit" value="Register" id="sub" style={styles.submitButton} onClick={submitForm}/>
                    <h1 style={styles.registerText}>Already a user <Link to={'/'}>Login</Link></h1>
                </form>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(/Assests/QtripHomebg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    formContainer: {
        padding: '20px',
        width: '400px',
        backgroundColor: 'rgba(0, 0, 0, 0.46)',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginTop: '-30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    h1: {
        color: 'orange',
        fontSize: '1.8em',
        textAlign: 'center',
    },
    label: {
        marginTop: '10px',
        display: 'block',
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        width: '300px',
        padding: '5px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginBottom: '5px',
    },
    h6: {
        color: 'orange',
        fontSize: '0.8em',
        textAlign: 'center',
    },
    submitButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'orange',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    registerText: {
        marginTop: '20px',
        fontSize: '1em',
        textAlign: 'center',
        color: '#fff',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
    },
    error: {
        color: 'red',
        fontSize: '1rem',
        marginBottom: '-40px',
    },
};


export default Registeration;