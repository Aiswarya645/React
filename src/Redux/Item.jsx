import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { link } from 'react-router-dom';
import { decre, incre } from './counterslice';

const Item = () => {
    const item=useSelector((state)=>state.counter.data);
    const dispatch=useDispatch();

  return (
    <div className='px-4'>
    <h2 className='font-serif flex justify-center m-10'>Your Cart</h2>
    {item.length > 0 ? (
        <div className='flex flex-wrap gap-4 justify-center'>
            {item.map((item, index) => (
                <div key={index} className='p-4 border rounded-lg shadow-sm max-w-xs bg-white'>
                    <img src={item.image} alt='Product' className='w-40 h-40 object-cover my-2' />
                    <h3 className='font-semibold'>{item.pname}</h3>
                    <p className='font-light'>{item.brand}</p>
                    <p className='font-bold'>${item.price}</p>
                    <p className='font-bold'>{item.quantity}</p>
                    <button onClick={()=>dispatch(incre(item.id))}>+</button><button onClick={()=>dispatch(decre(item.id))}>-</button>
                </div>
            ))}
        </div>
    ) : (
        <div className='flex justify-center'>
            <p>Your cart is empty.</p>
        </div>
    )}
</div>
  );
};

export default Item