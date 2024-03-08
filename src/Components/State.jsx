import { useState } from "react";

// import React from "react";
function State() {
  const [val, setVal] = useState([
    { name: "Dhananjay", age: 25 },
    { name: "Sonu", age: 28 },
  ]);
  // const[arr,setArr]=useState([10,20,30,40,50,60]);
  return (
    <div>
      {val.map((items) => (
        <>
          <h1>{items.name}</h1>
          <h1>{items.age}</h1>
        </>
      ))}
      {/* <h1>{val.name} {val.age}</h1> */}
      {/* <h2>{arr[0]}</h2> */}
      {/* <button onClick={()=>setVal({...val, name: "Sanjay",age:27})}>Change</button> */}
      {/* <button onClick={()=>setArr([21,22,23])}>Change</button> */}
      <button
        onClick={() => {
          setVal(
            val.map((item, i) =>
              item.name === "Sonu"
                ? { ...item, age: 29, gender: "male" }
                : { ...item, gender: "male" }
            )
          );
          // console.log(val)
        }}
      >
        Click
      </button>
      {val.map((items) => (
        <>
          <h1>{items.name}</h1>
          <h1>{items.age}</h1>
          <h1>{items.gender}</h1>
        </>
      ))}
    </div>
  );
}
export default State;
