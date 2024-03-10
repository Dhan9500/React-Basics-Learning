function Question5And6({products,head}){

    return(
        <div>
            <h1>Question 5 {head}</h1>
            <ul>
                {products.map((item,index)=><li>{item.name}</li>)}
            </ul>

            <h1>Question6</h1>
            <ul>
                {products.map((item,index)=>{
                    if(item.sales>item.quantity) return <li>{item.name}</li>
                })}
            </ul>

        </div>
    );
}

export default Question5And6;