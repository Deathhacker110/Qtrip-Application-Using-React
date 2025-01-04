import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
let City=()=>{
    let [api,setapi]=useState([]);
    let {cities}=useParams();
    console.log(cities);
    
    useEffect(()=>{
        fetch(`https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=${cities}`)
        .then(x=>x.json())
        .then(y=>setapi(y))
        .catch(e=>console.log(e))
    },[]);

    return(
        <>
        <div id="bmain">
            <div id="bdiv1">
                <h1>Explore all adventures</h1>
                <p>Here's a list of places that you can explore in city</p>
                <div id="bdiv11">
                    <label htmlFor="">Filters </label>
                    <div id="bdiv111">
                        <select name=""  className='tab'>
                            <option>Filter by Duration (Hours)</option>
                            <option value="">0-2 Hours</option>
                            <option value="">2-6 Hours</option>
                            <option value="">6-12 Hours</option>
                            <option value="">12+ Hours</option>
                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>

                    <div id="bdiv112">
                        <select name=""  className='tab'>
                            <option value="">Add Category</option>
                            <option value="">Cycling</option>
                            <option value="">Party Spots</option>
                            <option value="">Hill Gateways</option>
                            <option value="">Serene Beaches</option>

                        </select>
                        <div className='cleardiv'>Clear</div>
                    </div>
                    <div id="bdiv113">
                        <input type="text" placeholder='Search adventures' className='tab'/>
                        <div className='cleardiv'>Clear</div>
                    </div>
                </div>
            </div>

            <div id="BenMainDiv">
                {api.map((x,index)=>{
                    return(
                        <Link key={index} to={`/adven/${x.id}`}>
                            <div className="BenSubCards">   
                                <img src={x.image}/>
                                <p className="category">{x.category}</p>
                                <h5 className="h51">{x.name}</h5>
                                <p className="price">₹{x.costPerHead}</p>
                                <p className="Duration">Duration</p>
                                <p className="DurationValue">{x.duration} Hours</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default City;