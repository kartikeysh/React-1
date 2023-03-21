import { useState } from "react";


function Card({id,name,info,image,price,removetour}){
    const [description,setdescriptiom] = useState(`${info.substring(0,200)}...`) //NEW WAY OF CONCATONATION
    const[readmore,setread]=useState(false)
    function readhandler()
    {
        setread(!readmore)
        readmore ? setdescriptiom(`${info.substring(0,200)}...`):setdescriptiom(info)
     }
  
    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="detail">
                <h4 className="t-price">{price}</h4>
                <h4 className="t-name">{name}</h4>
            </div>
            <div className="description">
                {description}
                <span onClick={readhandler} className="read-more">{readmore?" showless":"readmore"}</span>
            </div>
            <div>
                <button className="btn" onClick={()=>removetour(id)}>NOT INTRESTED </button>
            </div>
            
        </div>
        
    )
}
export default Card;