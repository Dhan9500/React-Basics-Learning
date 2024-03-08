import React from 'react'

function Card() {

    const data = [{ image: 'https://images.unsplash.com/photo-1512446816042-444d641267d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbiUyMGJhc2ljc3xlbnwwfHwwfHx8MA%3D%3D', name: 'Amazon Basics', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", instock: true },
    { image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlfGVufDB8fDB8fHww', name: 'Apple', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', instock: true},
    { image: 'https://images.unsplash.com/photo-1581003989510-ba20094d343c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHJlZG1pfGVufDB8fDB8fHww', name: 'Mi', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', instock: true},
    { image: 'https://images.unsplash.com/photo-1531012278403-e5db3b774373?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvYXQlMjBoZWFkcGhvbmV8ZW58MHx8MHx8fDA%3D', name: 'Boat', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',instock:false },
    { image: 'https://images.unsplash.com/photo-1512446816042-444d641267d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbiUyMGJhc2ljc3xlbnwwfHwwfHx8MA%3D%3D', name: 'Amazon Basics', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",instock:false },
    { image: 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcGxlfGVufDB8fDB8fHww', name: 'Apple', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',instock:false },
    ]

    return (
        <div className='w-full h-screen bg-red-200 items-center justify-center flex  gap-10 border-red-50 overflow-x-auto'>
            {data.map((elem, index) => (<div key={index} className='w-52 bg-red-100 rounded-md overflow-hidden border-solid border-2 border-sky-500 shrink-0' >
                <div className='w-full h-32 bg-red-300'>
                    <img className='w-full h-full object-cover' src={elem.image} alt="" />
                </div>
                <div className='w-full px-3 py-4'> 
                    <h2 className='font-semibold'>{elem.name}</h2>
                    <p className='text-xs mt-5 ' >{elem.desc}</p>
                    <button className={`px-8 py-3 ${elem.instock?"bg-sky-400":"bg-red-400"} rounded-md text-sm text-center w-fit`}>{elem.instock?"InStock":"Out Of Stock"}</button>
                </div>
            </div>))}

        </div>
    )
}

export default Card
