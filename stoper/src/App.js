
import './App.css';
// import Counter from './components/Counter.jsx';
// import { useState} from "react"
import Counter1 from './components/Counter1';


function App() {
  // const [tmin,setTmin] = useState();
  // const [tsec,setTsec] =useState();
  return (
    <div className="App">
      {/* <input type="number" onChange={(e)=>setTmin(e.target.value)}/>
      <input type="number"  onChange={(e)=>setTsec(e.target.value)}/>
      <Counter tmin={tmin} tsec={tsec}/> */}
      <Counter1/>
    </div>
  );
}

export default App;
