import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)
  function change1(e){
  
    setNum1(e.target.value)
    // console.log(num1)
    // console.log(e.target.value)
  }
  function change2(e){
    setNum2(e.target.value)
    // console.log(num1)
    // console.log(e.target.value)
  }
  return (
    <div id="main">
      <input id='input1' type='number' onChange={change1}/>
       +
      <input id='input2' type='number' onChange={change2}/> 
      
      <p id='result'>{Number(num1)+Number(num2)}</p>
    </div>
  )
}


export default App;