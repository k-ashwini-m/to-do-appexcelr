import React from 'react'

export default function Task({data}) {
  return (
    <div className='task'> <input type="checkbox"  /> <h2>{data}</h2> <button>X</button> </div>
  )
}
