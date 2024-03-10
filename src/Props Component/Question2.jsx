
function Question2({backgroundColor,color,padding,borderRadius,text}){

    return(
        <div>
            <button style={{backgroundColor:backgroundColor,color:color,padding:padding,borderRadius:borderRadius,color:color}}>{text}</button>
        </div>
    );
}

export default Question2;