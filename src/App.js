import React from 'react';
import './App.css';
import Dash from "./components/dash";
import Nav from "./components/nav"


function App() 
{
    return(
        <section className="container">
           <Dash /> 
           <Nav />
        </section>
    )
}

export default App;