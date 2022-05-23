import React from "react";
import data from "./data";

function Main() {
   
  return (
    <div className="container bg-dark">
      {data.map((e, i) => (
        <div key={i} className="accordion">
          <button onClick={(e)=>{
              console.log(e.target.id)
              document.getElementById(`id${i}`).classList.toggle('active')
          }}  style={{width:'100%' }}>
            <h3>{e.title}</h3>
          </button>
          <div id={'id'+i}  className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia unde dolorum laborum fuga magni, laudantium maxime fugit dignissimos praesentium numquam cupiditate. Eius laborum accusamus maiores praesentium! Distinctio obcaecati totam praesentium.
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
