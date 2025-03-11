import { useState } from "react";
import Langcontext from "./Langcontext"; 

const Langprovider = ({ children }) => {
    const [theme, setTheme] = useState("english");

    const toggletheme = () => {
        setTheme(theme === "english" ? "malayalam" : "english"); 
    };

    return (
        <Langcontext.Provider value={{ theme, toggletheme }}>
            {children}
        </Langcontext.Provider>
    );
};

export default Langprovider;
