function Question1({name,designation,workexperience,h1Color1,h1Color2}) {
  return (
    <div className="w-full h-screen bg-slate-300 flex justify-center items-center">
        <div className="w-52 h-64 bg-slate-500">
        <div className="bg-red-200 w-full h-32">
            <img src="" alt="" />
        </div>
        <div className="mt-5">
            <h1 className="text-2xl font-bold italic text-center">{name}</h1>
            <h1 className={`mt-3 text-xs font-bold text-center ${h1Color1}`}>{designation}</h1>
            <h1 className={`mt-3 text-xs font-bold text-center ${h1Color2}`}>{workexperience}</h1>
        </div>
            
        </div>
    </div>
  )
}

export default Question1;
