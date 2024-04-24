export default function Card({data}) {
  return (
    <div className="bg-zinc-100 h-full w-44 rounded-md flex flex-col  items-center ">
      <div className="bg-red-500 w-10 h-10 rounded-full mt-2 object-cover overflow-hidden">
        <img
          src={data.image}
          alt=""
        />
      </div>
        <h1 className="text-lg font-semibold">{data.name}</h1>
        <h1 className="text-opacity-100">{data.email}</h1>
        <p className="text-center text-xs font-semibold leading-1 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, soluta.</p>
        <button className="bg-red-500 mt-2 mb-2 rounded-lg p-1 text-white">Remove It</button>
    </div>
  );
}
