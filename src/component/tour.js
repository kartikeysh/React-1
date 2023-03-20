import Card from "./card";
function Tour({tour,removetour}){
  console.log(tour) 
  return(
    <div className="container">
       <h1 className="title">Plans</h1>
       <div className="cards">
      {
        
        tour.map((tour)=>{
          return <Card  {...tour} removetour = {removetour}></Card>//while using maping in react we us eto send copyy of the value not the exact value this is what it is 
        })
      
      }
      </div>
      </div>
   )
  
}
export default Tour;