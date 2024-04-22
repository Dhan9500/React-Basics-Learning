export default function Music({values,index,handleClick}){

    return(
        <div className="bg-zinc-500 w-56 h-28 flex justify-evenly mt-10 pt-2 pl- ml-4 pb-5 relative rounded-lg ">
        <div className="bg-white h-20 w-20 rounded-lg overflow-hidden">
            <img className="h-full w-full  object-cover" src={values.image} alt="" />
        </div>
        <div className="text-white">
            <h1 className="font-semibold">{values.name}</h1>
            <h1 className="text-xs mt-2">{values.artist}</h1>
        </div>
        <button onClick={()=>handleClick(index)} className="bg-orange-500 absolute bottom-0 w-40 h-9 rounded-full whitespace-nowrap left-1/2 -translate-x-[50%] translate-y-[50%] text-white">{values.added?"Added":"Add to favourites"}</button>
        </div>
    )
}