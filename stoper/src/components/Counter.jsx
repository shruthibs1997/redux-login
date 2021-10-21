import { useState} from "react"

var ninterval;

export function useTimer(m,s){
    const [min,setMin] =useState(m)
    const [sec,setSec] = useState(s);
    console.log(min,sec)

     function handlestart(){
        ninterval= setInterval(time,1000);
    }

    function time(){
        setSec((prevVal)=>{
            if(prevVal===1){
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
                    return 10;
                        
                }
            return (prevVal-1)
        })
    }

    function handlereset(){
        setMin(min);
        setSec(sec)
        clearInterval(ninterval);
    }
    const p = handlestart;
    const n = handlereset
    return {min,sec,p,n}
}

function Counter({tmin,tsec}){
    // const [tmin,setTmin] = useState(0);
    // const [tsec,setTsec] =useState(0);
    console.log(typeof(tmin))
    const {min,sec,p,n}=useTimer(tmin, tsec)
    // console.log(Number(tmin), Number(tsec))
    // const function  check() {
        
    // }
    return (
        <div>
            count:{min}:{sec}
            <button onClick={p} >start</button>
            <button onClick={n}>reset</button>
        </div>
    )
}

export default Counter;