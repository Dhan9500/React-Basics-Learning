function S2Q4and5({products}){
    
    
    return(
        <div>
            {products.map((item,index)=>{
                return(
                    <ul className={`${item.price>50000?"border-2 border-red-600":"border-2"}`}>
                        <li>id: {item.id}</li>
                        <li>Name: {item.name}</li>
                        <li>Description: {item.description}</li>
                        <li>Price: {item.price}</li>
                    </ul>
                )
            })}

            {
                products.map((item,index) => {
                    if(item.name==='mobile')return(
                        <ul>
                        <li>id: {item.id}</li>
                        <li>Name: {item.name}</li>
                        <li>Description: {item.description}</li>
                        <li>Price: {item.price}</li>
                        </ul>
                    )
                })
            }
        </div>
    );
}
export default S2Q4and5;