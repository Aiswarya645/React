import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import New from './New';
import Header from './Header';
import Mapping from './Mapping';
import Map from './Map';
import Parent from './props/parent';
import Card from './props/card';
import Body from './props/Body';
import Count from './props/Count';
import Cont from './props/Cont';
import Tog from './props/Tog';
import Users from './datafetching/Users';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fetch from './datafetching/Fetch';
import Weather from './datafetching/weather';
import Form from './Form/Form';
import Movie from './datafetching/Movie';
import Has from './datafetching/Has';
import Details from './datafetching/Details';
import Calculator from './Calculator/Calculator';
import Todo from './Form/Todo/Todo';
import store from './Redux/store';
import {Provider} from 'react-redux'
import Cart from './Redux/Cart';
import Item from './Redux/Item';
import Bg from './context/Bg';
import Themeprovider from './context/Themeprovider';
import Lang from './Language/Lang';
import Langprovider from './Language/Langprovider';
// import { Provider } from 'react-redux';
// import store from './Form/Todo/Redux/store';
// import { Count } from './Form/Todo/Redux/counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Langprovider><BrowserRouter>
   <Routes>
    
    <Route path='/user' element={<Users></Users>}></Route>
    <Route path='/map' element={<Map></Map>}></Route>
    <Route path='/fetch'element={<Fetch></Fetch>}></Route>
    <Route path='/weather'element={<Weather></Weather>}></Route>
    <Route path='/form'element={<Form></Form>}></Route>
    <Route path='/movie'element={<Movie></Movie>}></Route>
    <Route path='/has'element={<Has></Has>}></Route>
    <Route path='/movies/:id'element={<Details></Details>}></Route>
    <Route path='/Cal'element={<Calculator></Calculator>}></Route>
    <Route path='/todo'element={<Todo></Todo>}></Route>
    <Route path='/' element={<Count></Count>}></Route>
    <Route path='/cart' element={<Cart></Cart>}></Route>
    <Route path='/item' element={<Item></Item>}></Route>
    <Route path='/bg' element={<Bg></Bg>}></Route>
    <Route path='/Lang' element={<Lang></Lang>}></Route>
  

   </Routes>
   </BrowserRouter></Langprovider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
