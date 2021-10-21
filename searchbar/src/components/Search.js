import {useState} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

function Search(){
    const [list ,setList]=useState([])
    const [text,setText] =useState('')
    const history = useHistory();
    
    async function handlesearch(){
        var res= await axios.get(`http://localhost:3004/country?q=${text}`)
        console.log(res.data);
        setList([...res.data]);
    }

    function  handleenter(e) {
        if(e.key==="Enter"){
            handlesearch()
        }
    }
    

    return(
        <div>
            <input type="text" placeholder="search"  onChange={(e)=>setText(e.target.value)} onKeyPress={handleenter}/>
            <button onClick={handlesearch}>Search</button>
               { list.map((el,i)=>{
                    return <div key={i} onClick={()=>{history.push(`/list/${el.country}`)}}>{el.country}</div>
                })}
        </div>
    )
}

export default Search;