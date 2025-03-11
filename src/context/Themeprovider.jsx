import React, { useState } from 'react'
import Themecontext from './Themecontext';

const Themeprovider = ({children}) => {
    const [theme,settheme]=useState('light');
    let toggletheme=()=>{
        settheme(theme=="light"?"dark":"light")
    }
  return (
    <div>
       <Themecontext.Provider value={{theme,toggletheme}}>
        {children}
        </Themecontext.Provider> 
    </div>
  )
}

export default Themeprovider