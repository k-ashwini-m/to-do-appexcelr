import Task from "../Components/Task";
import {useState} from 'react';
export default function Home() {
  const tasklist = [
    "Work on bug #21",
    "Api call",
    "Check with FE",
    "Machine learning algo",
  ];
  const [count, setCount] = useState(0);
  const incfun=()=>{setCount(count+1)}
  return (
    <center>
      <h1>React To-do 🌟</h1>
      <input type="text" className="inp" />
      <button id="add">Add</button>
      {tasklist.map((v, i) => (
        <Task key={i} data={v} />
      ))}
      <h1> {count} </h1>
      <button onClick={incfun}>Inc</button>
    </center>
  );
}

// 50% React Hooks: useState
