import { useState } from "react";
import Birthday from "./Prop Drilling Exercise/Birthday";
import Music from "./Prop Drilling Exercise/Music";
import Navbar from "./Prop Drilling Exercise/Navbar";

export default function () {
  const data = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683910767554-7508927ef89f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      name: "Ae Dil.....",
      artist: "Sonu Nigam",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1713322985754-80286a087746?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      name: "Khwaish.....",
      artist: "Udit Narayan",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1713096599018-9035583c05ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      name: "Intezarr.....",
      artist: "Kumar Sanu",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1561848355-890d054dc55a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      name: "Dil ki dhadkan..",
      artist: "Prachi Desai",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1712959670199-4bc3e645a0db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      name: "Wodka....",
      artist: "Honey Singh",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664116928414-2ab998603666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      name: "Pani-pani",
      artist: "Badshah",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1706216281765-abf12969e0f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
      name: "Betab Dil",
      artist: "Kumar Sanu",
      added: false,
    },
  ];
  
  const [val, setVal] = useState(data);

  const handleClick=(songIndex)=>{setVal((prev)=>prev.map((item,index)=> index===songIndex?{...item,added:!item.added}:item))}

  

  return (
    <div>
      <Navbar fav={val.filter(item=>item.added).length}/>
      <div className="flex flex-wrap gap-4">
        {val.map((item, index) => (
          <Music key={index} values={item} index={index} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
