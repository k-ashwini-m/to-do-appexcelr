import Task from "../Components/Task";
import {useState} from 'react';
export default function Home() {
  const [tasklist,setTasklist] = useState([
    "Work on bug #21",
    "Api call",
    "Check with FE",
    "Machine learning algo",
  ]);
  const [inp,setInp] = useState("")
  const [count, setCount] = useState(0);
 
  return (
    <center>
      <h1>React To-do 🌟</h1>
      <input type="text" className="inp" onChange={(e)=>{setInp(e.target.value)}} />
      <button id="add" onClick={()=>setTasklist([...tasklist, inp])}>Add</button>
      {tasklist.map((v, i) => (
        <Task key={i} data={v} />
      ))}
      <h1> {count} </h1>
      <button onClick={()=>{setCount(count+1)}}>Inc</button>
      <button onClick={()=>{setCount(count-1)}}>Dec</button>
    </center>
  );
}

// 50% React Hooks: useState
