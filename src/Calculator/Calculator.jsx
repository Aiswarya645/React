import React, { useState } from 'react'



const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('')

    const handlechange = (value) => {
        setInput(input + value);


    }
    const handlesubmit = () => {
        try {
            setResult(eval(input));
        }
        catch (error) {
            setResult(error)
            console.log(error);

        }

    }
    const handleClear = () => {
        setInput("");
        setResult("");
      };
    

    return (


        <div className='flex flex-col justify-center min-h-screen bg-slate-100 items-center'>
            <div className='grid grid-cols-3 w-25 bg-neutral-400 rounded-2xl border-zinc-950 p-11'>
                
                <button  className='col-span-3 h-20 bg-white rounded-xl '>
                    <div  className="text-gray-700 text-xl">{input}</div>
                    <div  className="text-gray-500 text-lg">{result}</div>
                </button>

                <button onClick={()=>handlechange("1")}  className='bg-amber-600'>1</button>
                <button onClick ={()=>handlechange("2")} className='bg-amber-600'>2</button>
                <button onClick ={()=>handlechange("3")}className='bg-amber-600'>3</button>
                
                <button onClick={()=>handlechange("4")} className='bg-amber-600'>4</button>
                <button onClick={()=>handlechange("5")} className='bg-amber-600'>5</button>
                <button onClick={()=>handlechange("6")} className='bg-amber-600'>6</button>
                
                <button onClick ={()=>handlechange("7")}className='bg-amber-600'>7</button>
                <button onClick={()=>handlechange("8")} className='bg-amber-600'>8</button>
                <button onClick ={()=>handlechange("9")}className='bg-amber-600'>9</button>
                <button onClick ={()=>handlechange("0")} className='bg-amber-600'>0</button>
                <button onClick ={handleClear} className='bg-amber-600'>c</button>
                <button onClick={()=>handlechange("+")} className='bg-teal-500'>+</button>
                <button onClick={()=>handlechange("-")} className='bg-teal-500'>-</button>
                <button onClick={()=>handlechange("*")} className='bg-teal-500' >*</button>
                <button onClick ={()=>handlechange("/")}className='bg-teal-500'>/</button>
                <button onClick={()=>handlechange("%")}  className='bg-teal-500'>%</button>
                
                <button  onClick={handlesubmit}className='bg-teal-500'>=</button>
                <button onClick={()=>handlechange(".")} className='bg-teal-500'>.</button>
            </div>
        </div>
    )
}

export default Calculator