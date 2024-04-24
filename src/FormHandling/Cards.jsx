import Card from "./Card";

export default function Cards({cdata,remove}){
    return (
        <div className="w-full p-4 flex flex-wrap overflow-auto max-h-72 min-h-72 justify-center items-center gap-4">
        {cdata.map((item,index)=><Card key={index} index={index} data={item} remove={remove}/>)} 
        </div>
    )
}