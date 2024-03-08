import { useState } from "react";

function StateArr() {
  // const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  const [val, setVal] = useState([
    {
      name: "Dhananjay",
      age: 25,
    },
    { name: "Harsh", age: 27 },
  ]);

  return (
    // <div className="p-10">
    //     {val.map((item, index) => <h1 key={index}>{item}</h1>)}
    //     <button onClick={() => setVal(val.filter((item, index) => item % 2 != 0))} className="px-1 py-1 bg-red-200 rounded-full">Click Here</button>
    // </div>
    <div className="p-7">
      {val.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </div>
      ))}
      <button
        onClick={() =>
          setVal(
            val.map((item) =>
              item.name == "Harsh" ? { name: "Harsh", age: 30 } : item
            )
          )
        }
        className="px-1 py-2 bg-red-500 rounded-full"
      >
        Click Me
      </button>
    </div>
  );
}

export default StateArr;
