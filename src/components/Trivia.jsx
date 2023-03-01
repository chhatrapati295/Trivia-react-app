import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import play from '../assets/play.mp3'
import correct from '../assets/correct.mp3'
import wrong from '../assets/wrong.mp3'
export default function Trivia({data,questionNumber,setQuestionNumber,setStop}) {
    const[question ,setQuestion]=useState(null)
    const[selectedAnswer,setSelectedAnswer] = useState(null)
    const[className,setClassName]= useState('answer')
    const [letsPlay] = useSound(play)
    const [correctAns] = useSound(correct)
    const [wrongAns] = useSound(wrong)

    // useEffect(()=>{
    //     letsPlay()
    // },[letsPlay])
    const delay = (duration,callback)=>{
        setTimeout(() => {
            callback()
        }, duration);
    }
    const handleClick = (e)=>{
        setSelectedAnswer(e)
        setClassName('answer active')
        // setTimeout(() => {
        //     setClassName(e.correct ? 'answer correct' : 'answer wrong')
        // }, 2000);
        delay(2000,()=>{
            setClassName(e.correct ? 'answer correct' : 'answer wrong')
        })
        delay(5000,()=>{
            if(e.correct){
                correctAns()
                delay(2000,()=>{
                    setQuestionNumber((prev)=>prev+1)
                    setSelectedAnswer(null)
                })
            }else{
                wrongAns()
                delay(2000,()=>{
                    setStop(true)
                })
            }
        })
    }
    useEffect(()=>{
        setQuestion(data[questionNumber - 1])
    },[data,questionNumber])
  return (
    <div className='leftBottom'>
      <div className="question">{question?.question}</div>
          <div className="answers">
            {question?.answers.map(e=>{
                return <span className={selectedAnswer === e ? className : 'answer'} onClick={()=>handleClick(e)}>{e.text}</span>
            })}
            
          </div>
    </div>
  )
}
