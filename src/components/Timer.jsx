import React, { useEffect, useState } from 'react'
export default function Timer({setStop,questionNumber}) {
    const [timer,setTimer]=useState(30)
    useEffect(()=>{
        if(timer ===0) return setStop(true)
        const intervalId = setInterval(() => {
            setTimer(timer-1)
        }, 1000);
        return (()=>clearInterval(intervalId))
    },[setStop,timer])

    useEffect(()=>{
        setTimer(30)
    },[questionNumber])
  return (
    <div>
      {timer}
    </div>
  )
}
