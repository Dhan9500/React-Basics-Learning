function Props({text,color}){

    return (
        <div className="p-5">
            <button className={`px-1 py-2 ${color} rounded-full text-cyan-50`}>{text}</button>
        </div>
    )
}
export default Props;