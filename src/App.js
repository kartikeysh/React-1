import React, { useState } from "react";
import  './data.js'
import data from "./data.js";
import Tour from "./component/tour.js";


const App = () => {
  const[tours,setTours]=useState(data)
  function removetour(id)
  {
    const newtour = tours.filter(tour => tour.id  !== id)
    setTours(newtour)
  }
  if(tours.length === 0 )
  {
    console.log("reched")
    return(
      <div className="refresh">
        <h2>
          NO Tour Left
        </h2>
        <button className="btn" onClick={()=>setTours(data)}>
          Refresh
        </button>

      </div>
    )
  }
  
 return(
  <div className="App">
 
  <Tour tour = {tours} removetour = {removetour}></Tour>
  <div>
  
  
  
  </div>
  </div>
 )
};

export default App;
