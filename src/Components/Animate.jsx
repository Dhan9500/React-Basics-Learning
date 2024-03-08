import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Animate() {
  const [val, setVal] = useState(true);

  return (
    <div className="w-full h-screen bg-red-200 flex justify-center items-center">
      <div className="w-[18%] h-[20%] relative  rounded-md flex flex-col overflow-hidden">
        <img
          className={` transition-transform duration-100 w-full h-full object-cover shrink-0 ${
            val ? "-translate-y-[0%]" : "-translate-y-[100%]"
          }`}
          src="https://images.unsplash.com/photo-1709238810760-bae86f4c2204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={` transition-transform duration-1000 w-full h-full object-cover shrink-0 ${
            val ? "-translate-y-[0%]" : "-translate-y-[100%]"
          }`}
          src="https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMDJ8fHxlbnwwfHx8fHw%3D"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="absolute w-10 h-10 left-1/2  flex items-center justify-center bg-[#dadada54] bottom-4 rounded-full -translate-x-[50%] -translate-y-[10%]"
        >
          <FaArrowRightLong />
        </span>
      </div>
    </div>
  );
}
export default Animate;
