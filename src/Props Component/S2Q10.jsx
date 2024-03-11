import { useState } from "react";

function S2Q10({ todoItems }) {
  
    
    return (
    <div className="w-full h-screen flex justify-evenly items-center gap-2">
      {todoItems.map((item, index) => {
        return (
          <div key={index} className={`${item.isCompleted?"bg-green-500":"bg-red-500"} w-[15%] h-40 rounded-lg overflow-hidden`}>
            <h1>Id: {item.id}</h1>
            <h1>Title: {item.title}</h1>
            <h1>Description: {item.description}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default S2Q10;
