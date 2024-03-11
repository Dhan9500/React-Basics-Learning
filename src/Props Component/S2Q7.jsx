import { useState } from "react";

function S2Q7({heading,name,learning}){
    
    // const contentDrill=()=>{
    //     const p=document.createElement('p');
    //     p.innerText=learning;
    //     document.getElementsByTagName("div")[0].appendChild(p);
    // }
    
    const[val,setVal]=useState(false);

    return(
        <div>
            <h1>{heading}</h1>
            <h2>{name}</h2>
            <button onClick={()=>setVal(!val)} className="px-1 py-2 bg-green-500 rounded-md">Know More</button>
            <p>{val?learning:""}</p>
        </div>
    );
}
export default S2Q7;