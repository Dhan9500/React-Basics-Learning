import Cmp1 from "./New Components/Cmp1";
import Birthday from "./Prop Drilling Exercise/Birthday";
import Music from "./Prop Drilling Exercise/Music";
import Navbar from "./Prop Drilling Exercise/Navbar";

export default function(){
    return(
        <div>
            <Navbar/>
            <div className="flex flex-wrap ">
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            <Music/>
            </div>
        </div>
        
    );
}