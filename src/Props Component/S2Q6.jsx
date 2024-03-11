import { useState } from "react";

function S2Q6({title,content}){

    // const contentDrill=()=>{
    //     const p=document.createElement("p");
    //     p.innerHTML=content;
    //     document.getElementsByTagName("div")[0].appendChild(p);

    // }

    const[val,setval]=useState(false);

    return(
        <div>
            <h1>{title}</h1>
            <button onClick={()=>setval(!val)} className="px-1 py-2 rounded-md bg-green-400">Know More</button>
            <p>{val?content:""}</p>
        </div>
    );
}
export default S2Q6;