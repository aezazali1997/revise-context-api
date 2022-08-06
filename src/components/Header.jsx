import React,{useContext} from "react";
import ThemeToggler from "./ThemeToggler";
import {ThemeContext} from '../context/ThemeContext'
import {appTheme} from '../utils/colors'
export const Header = () => {
const theme = useContext(ThemeContext);
const contextTheme = appTheme[theme];
console.log(contextTheme)
    return(
        <header style ={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color:`${contextTheme.textColor}`,
          background:`${contextTheme.background}`
           }}>
            <h1>Context API</h1>
            <ThemeToggler />
        </header>
    );
}

