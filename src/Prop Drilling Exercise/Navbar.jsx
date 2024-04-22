export default function Navbar({fav}){
    return (
        <div className="px-5 py-10 font-bold text-xl w-full h-full flex justify-between items-center">
            <h1>Orange</h1>
            <div className="bg-orange-500 h-11 w-32 rounded-lg flex justify-evenly items-center text-white font-semibold">
            <h1>Favourites</h1>
            <h1>{fav}</h1>
            </div>
        </div>
    )
}