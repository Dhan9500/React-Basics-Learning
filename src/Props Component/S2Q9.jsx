import { useState } from "react";

function S2Q9({ red, blue, green }) {
    const[reds,setRed]=useState(false);
    const[blues,setBlue]=useState(false);
    const[greens,setGreen]=useState(false);
  return (
    <div>
      <span className="flex flex-col justify-center items-center">
        <button onClick={()=>setRed(!reds)} className="px-1 py-2 bg-red-600 rounded-md">Red Color</button>
        <p>{reds?red:""}</p>
      </span>
      <span className="flex flex-col justify-center items-center">
        <button onClick={()=>setBlue(!blues)} className="mt-5 px-1 py-2 bg-blue-600 rounded-md">Blue Color</button>
        <p>{blues?blue:""}</p>
      </span>
      <span className="flex flex-col justify-center items-center">
        <button onClick={()=>setGreen(!greens)} className="mt-5 px-1 py-2 bg-green-600 rounded-md">Green Color</button>
        <p>{greens?green:""}</p>
      </span>
    </div>
  );
}
export default S2Q9;
