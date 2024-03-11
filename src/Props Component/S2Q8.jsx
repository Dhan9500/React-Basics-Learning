import { useState } from "react";

function S2Q8({products}){
    const[val,setVal]=useState(false);

    return(
        <div>
            <h1>My Gadgets</h1>
            {products.map((item,index)=>{
                return(
                    <ul className="border-2" style={{backgroundColor:val&&item.price>50000?"green":""}}>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.description}</li>
                        <li>{item.price}</li>
                    </ul>
                );
            })}
            <button onClick={()=>setVal(!val)} className="px-1 py-2 bg-green-500 rounded-md">Highlight Expensive Gadgets</button>
        </div>
    );
}
export default S2Q8;