import React, { useState } from "react";
import Card from "./Components/Card";
import Eventhandle from "./Components/Eventhandle";
import State from "./Components/State";
import StateArr from "./Components/StateArr";
import Animate from "./Components/Animate";
import Props from "./Components/Props";
import Cardprops from "./Components/Cardprops";
function App() {
  // return (
  //     <div className="flex bg-zinc-300">
          // <Card />
  //         <Eventhandle/>
  //         <State/>
  //         <StateArr/>
  //         <Animate/>
  //         <Props text="Know More" color='bg-green-500'/>
  //         <Props text="Download" color='bg-yellow-500'/>
  //     </div>
  // )

  const raw = [
    {
      name: "Dhananjay",
      profession: "Software Eng",
      image:
        "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww",
      friends: false,
    },
    {
      name: "Rahul",
      profession: "Singer",
      image:
        "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs=",
      friends: false,
    },
    {
      name: "Anant Ambani",
      profession: "Hacker",
      image:
      "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/65a2c8f73b517-anant-ambani-and-radhika-merchant-got-engaged-at-shrinathji-temple-in-rajasthans-nathdwara-on-decem-133133194-16x9.jpg?size=948:533",
      friends: false,
    },
    {
      name: "Shashank",
      profession: "Government",
      image:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww",
      friends: false,
    },
    {
      name: "Cute",
      profession: "Cutie",
      image:
      "https://images.unsplash.com/photo-1638996970429-389100ca2b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },



  ];

  const [data, setData] = useState(raw);

  const handleClick = (clickIndex) => {
    setData(
      data.map((item, index) => index === clickIndex ? { ...item, friends: !item.friends } : {...item}
      )
    );
  };
//   console.log(data);
  return (
    <div className=" h-screen flex justify-center  items-center gap-2">
      {data.map((item, index) => {
        return (
          <Cardprops
            key={index}
            values={item}
            handleClick={handleClick}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default App;
