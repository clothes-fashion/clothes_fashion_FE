import './App.css';
import Header from "./pages/users/header/Header";
import React from "react";
import {BrowserRouter} from "react-router-dom"
import Footer from "./pages/users/footer/Footer";
import Body from "./pages/users/body/Body";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Body/>
            {/*<Footer />*/}
        </BrowserRouter>
    );
}

export default App;
