import React from 'react';
import logo from './JuanAlvarez.jpg';
import './App.css';

function App() {
    return (

        <
        div className = "App" >

        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        My name is { "Juan Alvarez " }
        and I 'm going to master React  </p>        <
        a className = "App-link"
        href = "https://github.com/JayTthePro91"
        target = "_blank"
        rel = "noopener noreferrer" >
        Check me out < /a>     < /
        header > <
        /div>
    );
}

export default App;