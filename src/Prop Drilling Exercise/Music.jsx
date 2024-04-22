export default function Music(){
    return(
        <div className="bg-zinc-500 w-56 h-28 flex justify-evenly mt-10 pt-2 pl- ml-4 pb-5 relative rounded-lg ">
        <div className="bg-white h-20 w-20 rounded-lg overflow-hidden">
            <img className="h-full w-full  object-cover" src="https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.webp?b=1&s=170667a&w=0&k=20&c=1oQ2rt0FfJFhOcOgJ8hoaXA5gY4225BA4RdOP1RRBz4=" alt="" />
        </div>
        <div className="text-white">
            <h1 className="font-semibold">Song Name</h1>
            <h1 className="text-xs mt-2">Artist</h1>
        </div>
        <button className="bg-red-500 absolute bottom-0 w-40 h-9 rounded-full whitespace-nowrap left-1/2 -translate-x-[50%] translate-y-[50%] text-white">Add to Favourites</button>
        </div>
    )
}