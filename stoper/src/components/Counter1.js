import { useState} from "react"

var ninterval;


function Counter1(){

    const [min,setMin] =useState(0);
    const [sec,setSec] = useState(0);

    function handlestart(){
        ninterval= setInterval(time,1000);
    }

    function time(){
        setSec((prevVal)=>{
            if(prevVal===1|| prevVal===0){
                setMin((Val)=>{
                    if(Val===0){
                        clearInterval(ninterval);
                        return 0;
                    }else{
                        return (Val-1);
                    }      
                })
                if(min===0){
                    return 0;
                }
                    return 60;
                        
                }
            return (prevVal-1)
        })
    }

    function handlereset(){
        setMin(5);
        setSec(0)
        clearInterval(ninterval);
    }
    return(
        <div>
            <input type="number" onChange={(e)=>setMin(e.target.value)}/>
            <input type="number"  onChange={(e)=>setSec(e.target.value)}/>
            count:{min}:{sec}
            <button onClick={handlestart} >start</button>
            <button onClick={handlereset}>reset</button>
        </div>
    )
}

export default Counter1;