import React from 'react'

function Eventhandle() {

    const songData = [{ name: "Mahi Ve", desc: "Mahi ve Mahi Ve....." }, { name: "Chand Sitare", desc: "Chnand Sitare........" }, 
    { name: "Humsafar", desc: "Humsafar......" }, 
    { name: "Dil Ki Dhadkan", desc: "Dil Ki Dhadkan....." }]

    const buttonHandle=() => {alert("Running...");};

    return (
        <div className='flex w-full h-screen bg-red-200 justify-center items-center space-x-10'>

            {songData.map((item, index) => (
                <div className='w-40 h-60 bg-zinc-500 border-2 border-blue-300 rounded-md text-center'>
                    <h1 className='font-semibold'>{item.name}</h1>
                    <p className='mt-3 ml-2 text-left'>{item.desc}</p>
                    <button onClick={buttonHandle } className='px-7 py-2 bg-sky-400 mt-20'>Download</button>
                </div>
            ))}
        </div>
    )
}

export default Eventhandle
