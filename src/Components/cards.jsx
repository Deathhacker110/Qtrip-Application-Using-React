import React from 'react';
import {Link} from "react-router-dom";
import { useState,useEffect } from 'react';

export default function Cards(){
  const [search, updatedSearch] = useState("");  
  const change = (e) => {
        updatedSearch(e.target.value);
  };
  
let[api,setapi]=useState([])

  useEffect(()=>{ fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
    .then(x=>x.json())
    .then(y=>setapi(y)).catch((error)=>{console.log("Cities API Failed",error)})

  });

    return(
      <div>
        <div id="Homediv">
          <h1>Welcome to QTrip</h1>
          <p>Explore the world with fantastic places to venture around</p>
          <input
              onChange={change}
              type="search"
              id="search"
              placeholder="Search a City"
              value={search}
          />
        </div>
        
        <div id="cardsdiv">
          {api.filter(x=>x.city.toLowerCase().includes(search)).length>0?
            api.filter(x=>x.city.toLowerCase().includes(search)).map((y,k1)=>{return(
            <Link key={k1} to={`/${y.id}`}>
            <div className="tile" style={{margin:"20px"}}>
              <img  src={y.image}/>
              <div className="tdata">
                <h5 className="tdh5">{y.id.toUpperCase()}</h5>
                <p className="tdp">{y.description}</p>
              </div>
            </div>
            </Link>
            )}):<h1>No Cities Found</h1>
          }
        </div>
    </div>
        
        
    )



  }
