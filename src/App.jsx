import { useState } from 'react'
import './App.css'


function App() {
  const [num, setNum] = useState(0);
  const {num2, setNum2} = useState(0);
  const{operater, setOperater} = useState('');

  const handleNumber= (e)=> {
    const selectedNum = e.target.innerText;
     
    console.log(setNum)
    if(num === 0){
      setNum(parseFloat(selectedNum))
    }else{
      setNum(num +parseFloat(selectedNum))
    }
  }
  const clear = () =>{
    
    setNum(0)
  }

  const percentage=() =>{
    setNum(num/100)
  }

  const operaterHandler = (e)=>{
    setOperater(e.target.innerText);
    setNum2(num)
    setNum(0)
  }

  const calculate = () => {
    switch(operater){
      case '+':
        setNum((num2) + (num2));
        break;
        case '-':
          setNum((num2) - (num2));
          break;
          case 'x':
            setNum((num2) * (num2));
            break;
            case '/':
              setNum((num2) / (num2));
              break;
              case'+/-':
              setNum((num2) - (num2) || setNum((num2)+(num2)))
              break;
              default:
              break;
    }
  }
  return (
  
    <>
    <div className='font-serif text-lg text-slate-400 text-align-left'><h2>Kevin's Calculater App</h2></div>
    <div className='w-2/4 rounded-md border-blue-700 w-fit h-screen flex flex-wrap justify-center items-center bg-slate-700 mx-auto'>
      <div>
        <div className="w-4/6  flex justify-center align-center h-5/6 bg-gray-800 mx-auto">
          <div className='flex w-4/6 h-3/6 text-white justify-end pr-10 text-3x1 mt-4'>
            {num}
          </div>
        </div>
        <div className="w-3/6  flex flex-wrap items-center justify-center text-white space-x-0.5 mx-auto ">
          <button onClick={clear} className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>c</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>(</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>)</button>
          <button onClick={percentage} className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>%</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>/</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>7</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>8</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>9</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg' onClick={handleNumber}>.</button>
          <button onClick={operaterHandler} className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>x</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>4</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>5</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>6</button>
          <button onClick={operaterHandler} className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>-</button>
          <button onClick={operaterHandler} className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>+/-</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>1</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>2</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>3</button>
          <button className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-green-500 rounded-lg' onClick={handleNumber}>0</button>
          <button onClick={operaterHandler} className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>+</button>
         
          <button onClick={calculate} className='mt-5 m-2 w-14 h-14 flex items-center justify-center bg-orange-500 rounded-lg'>=</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
