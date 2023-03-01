import './App.css'
import { useEffect, useMemo, useState } from 'react';
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {
  const[username,setUsername] = useState(null)
  const [questionNumber , setQuestionNumber] = useState(1)
  const [stop,setStop] = useState(false)
  const [earned ,setEarned] = useState("$0")
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(()=>
  [
    {id:1,amount:"$100"},
    {id:2,amount:"$200"},
    {id:3,amount:"$400"},
    {id:4,amount:"$800"},
    {id:5,amount:"$1600"},
    {id:6,amount:"$3200"},
    {id:7,amount:"$6400"},
    {id:8,amount:"$10000"},
    {id:9,amount:"$20000"},
    {id:10,amount:"$30000"},
    {id:11,amount:"$40000"},
    {id:12,amount:"$50000"},
    {id:13,amount:"$60000"},
    {id:14,amount:"$80000"},
    {id:15,amount:"$100000"},
  ].reverse(),
  [])
  useEffect(()=>{
    questionNumber > 1 && 
    setEarned(moneyPyramid.find((m)=> m.id === questionNumber -1).amount)
  },[moneyPyramid , questionNumber])
  return (
    <div className="app">
      { username ? (
        <>
        <div className="left">
        {stop ? (
          <h2 className='endText'>You have earned {earned} </h2>
        ) : 
        <>
        <div className="leftTop">
          <span className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></span>
        </div>
          <Trivia data={data} questionNumber={questionNumber} setStop={setStop} setQuestionNumber={setQuestionNumber} />
        </>
        }
        {/* <div className="leftTop">
          <span className="timer">30</span>
        </div>
          <Trivia data={data} questionNumber={questionNumber} setStop={setStop} setQuestionNumber={setQuestionNumber} /> */}
      </div>
      <div className="right">
        <ul className="amountLists">
          {moneyPyramid.map(e=>{
            return <li className={questionNumber === e.id ? 'amountListItem active' : 'amountListItem'}>
            <span className="number">{e.id}</span>
            <span className="amount">{e.amount}</span>
          </li>
          })}
        </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername}/>}
    </div>
  );
}

export default App;
