import React from 'react'
import { useRef } from 'react'

export default function Start({setUsername}) {
    const inputref = useRef()
    const handleClick = ()=>{
        inputref.current.value && setUsername(inputref.current.value)
    }
  return (
    <div className='start'>
      <input type="text" autoFocus ref={inputref} placeholder='Type your name here' className="inputStart" />
      <button className="btnStart" onClick={handleClick}>Start</button>
    </div>
  )
}
