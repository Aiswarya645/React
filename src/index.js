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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Count></Count>}></Route>
    <Route path='/user' element={<Users></Users>}></Route>
    <Route path='/map' element={<Map></Map>}></Route>
    <Route path='/fetch'element={<Fetch></Fetch>}></Route>
    <Route path='/weather'element={<Weather></Weather>}></Route>
    <Route path='/form'element={<Form></Form>}></Route>
    <Route path='/movie'element={<Movie></Movie>}></Route>
    <Route path='/has'element={<Has></Has>}></Route>
    <Route path='/movies/:id'element={<Details></Details>}></Route>

   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
