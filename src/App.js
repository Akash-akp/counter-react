import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);

  const decreaseCounter = ()=>{
    setCount(count-1);
  }

  const increaseCounter = ()=>{
    setCount(count+1);
  }

  const resetCounter = ()=>{
    setCount(0);
  }

  return (
    <div class="flex h-[100vh] relative justify-center items-center bg-bgColor">
        <div class="flex flex-col gap-10 w-[350px]">
            <div class="text-headColor font-medium text-[30px]">
                Increment and Decrement
            </div>

            <div class="flex justify-around bg-white text-[40px] text-bgColor rounded-md py-3">
                <button onClick={decreaseCounter}  id="minusbtn" class="border-r-2 border-btnBorder pr-6 pl-6">
                    <i class="fa-solid fa-minus"> </i>
                </button>

                <div id="countr" class="font-bold">
                    {count}
                </div>

                <button onClick={increaseCounter} id="plusbtn" class="border-l-2 border-btnBorder pl-6 pr-6">
                    <i class="fa-solid fa-plus"> </i>
                </button>
            </div>
            
            <button onClick={resetCounter} className='text-center mx-auto bg-headColor hover:bg-[#225b36] text-white text-[25px] p-2 rounded-lg w-[150px]'>
              Reset
            </button>
        </div>
    </div>
  );
}

export default App;
