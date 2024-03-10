import { useState } from "react";

function Cardprops({values,handleClick,index}) {
  
    const {name,image,profession,friends}=values;

  return(
    <div className="w-52 bg-zinc-300 rounded-md overflow-hidden hover:rotate-[360deg] transition-transform duration-[8000ms]">
    <div className="w-full h-40 overflow-hidden " >
        <img className={`w-full h-full object-cover rounded-md shrink-0 `} src={image} alt="" />
    </div>
    <div className="p-3">
        <h1 className="text-xl font-bold italic ">{name}</h1>
        <h1 className="text-xs font-semibold mt-1">{profession}</h1>
        <button onClick={()=>handleClick(index)}  className={`mt-2 px-1 py-1 ${friends?"bg-green-500":"bg-blue-500"}  rounded-lg`}>{friends?"Friends":"Add Friends"}</button>
    </div>
    </div>
    
  )
}

export default Cardprops;
