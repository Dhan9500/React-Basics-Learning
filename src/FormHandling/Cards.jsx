import Card from "./Card";

export default function Cards({data}){
    return (
        <div className="w-full p-4 flex flex-wrap overflow-auto max-h-72 min-h-72 justify-center items-center gap-4">
        {data.map((item,index)=><Card data={item}/>)} 
        </div>
    )
}