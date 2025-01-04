import React, { useState } from "react";
import { Link } from "react-router-dom";
let authenticated=false;
let Login = () => {
    let [state,setState] =useState({email:"",password:""});
    function handleChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
        console.log(state);
    }
    let [err,setErr]=useState({});
    let logDetails=window.sessionStorage.getItem("details");
    let details=JSON.parse(logDetails);
    console.log(details);
    function validate(){
        let errors={};
        let valid=true;
        if(!state.email){
            errors.email="Email is required";
            valid=false;
        }
        else if(!(state.email===details.email)){
            errors.email="email is inavlid";
            valid=false;
        }
        if(!state.password){
            errors.password="Password is required";
            valid=false;
        }
        else if(!(state.password===details.password)){
            errors.password="password is invalid";
            valid=false;
        }
        setErr(errors);
        return valid;
    }
    function login(e){
        e.preventDefault();
        if(validate()){
            alert("Login successfull");
            window.location.href="qtriphome";
            authenticated=true;
        }
        else{
            alert("Login failed");
        }
    }
    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
            <h1 style={styles.h1}>Login Form</h1>
                <form action="">
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
                    <br/>
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
                    {err.password && <p style={styles.error}>{err.password}</p>}
                    <br/>
                    <input type="submit" value="Log In" id="sub" style={styles.submitButton} onClick={login}/>
                    <h1 style={styles.registerText}>New user <Link to={'/register'}>Register</Link></h1>
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
        marginBottom: '20px',
        color: 'orange',
        fontSize: '1.8em',
        textAlign: 'center',
    },
    label: {
        marginTop: '20px',
        display: 'block',
        fontWeight: 'bold',
        color: '#fff',
    },
    input: {
        width: '300px',
        padding: '5px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        marginBottom: '10px',
    },
    submitButton: {
        width: '100%',
        padding: '10px',
        backgroundColor: 'orange',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '45px',
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
export  { Login,authenticated };