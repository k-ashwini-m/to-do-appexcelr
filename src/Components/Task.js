import React from 'react'

export default function Task({data,i, tasklist, setTasklist}) {
        const delfun = () => { 
                const curr = [...tasklist];
                curr.splice(i,1);
                setTasklist(curr)
                
         };
  return (
    <div className='task'> <input type="checkbox"  /> <h2>{data}</h2> <button onClick={delfun}>X</button> </div>
  )
}
