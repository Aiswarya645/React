import React from 'react'
import img from './shoe2.jpg'
import img1 from './shoe3.jpg'
import img2 from './shoe4.jpg'
import img3 from './shoe5.jpg'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux';
import { addData } from './counterslice';
import { Link } from 'react-router-dom';



        

    const data = [
        {
          pname: "Jordhan Max Aura 6",
          image: img,
          price: 8965.0,
          brand: "Nike",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi praesentium, doloremque et officiis porro doloribus fuga explicabo distinctio amet facilis, eius sequi consequuntur harum optio adipisci qui voluptas suscipit temporibus.",
        },
        {
          pname: "Air jordhan Retro",
          image: img1,
          price: 8965.0,
          brand: "Nike",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi praesentium, doloremque et officiis porro doloribus fuga explicabo distinctio amet facilis, eius sequi consequuntur harum optio adipisci qui voluptas suscipit temporibus.",
        },
        {
          pname: " Nike Jordhan ",
          image: img2,
          price: 8965.0,
          brand: "Nike",
          detail:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi praesentium, doloremque et officiis porro doloribus fuga explicabo distinctio amet facilis, eius sequi consequuntur harum optio adipisci qui voluptas suscipit temporibus.",
        },
        {
            pname: " Travis scott jordhan",
            price: 8965.0,
            image: img3,
            brand: "Nike",
            detail:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi praesentium, doloremque et officiis porro doloribus fuga explicabo distinctio amet facilis, eius sequi consequuntur harum optio adipisci qui voluptas suscipit temporibus.",
          },
      ];

      const Cart = () => {
        const  cart=useSelector((state)=>state.counter.data)
        const dispatch=useDispatch();

  console.log(cart);
  
  return (
    
    <div className='px-4'>
        <h2 className='font-serif flex justify-center m-10 '>Shopping Cart</h2>
       <Link to='/item'><h2>cart</h2></Link> 
        <div className='flex flex-wrap gap-4 justify-center'>
        {data.map((item,index)=>(
 <div key={index} className='p-4 border rounded-lg shadow-sm max-w-xs bg-white '> 
  <div className='flex justify-center'>
  <img src={item.image} alt='Product' className='w-40 h-40 object-cover my-2 '/>
  </div>
  <div className='flex justify-center'>
  <h3 className=' font-semibold'>{item.pname}</h3>
  </div>
  <div className='flex justify-center'>
  <p className='font-light'>{item.brand}</p>
  </div>
  <div className='flex  justify-center'>
  <p className=' font-bold'>${item.price}</p>
  </div>
  <div className='flex justify-center'>
  <p>⭐⭐⭐⭐</p>
  </div>
  <div className='flex justify-around'>
  <p className='font-thin text-sm text-gray-700 mb-2'>{item.detail}</p>
  </div>
  <button className='bg-emerald-600 flex justify-center rounded-3xl text-wrap w-full' onClick={()=>dispatch(addData({id:index,image:item.image,Name:item.pname,price:item.price,Brand:item.brand,detail:item.detail}))}>Add To Cart</button>
  </div>
    
        ))}
     </div>   
    </div>
  )
}

export default Cart