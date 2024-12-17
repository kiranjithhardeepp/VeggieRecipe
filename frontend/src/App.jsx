import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import './App.css'
import React from "react";


const App = () => {
 

  return (
    <div className="w-full h-screen px-4 sm:px-6 lg:px-8">
      <Header/>
      <div className="min-h-[calc(100vh-136px)] mt-8">
        
      <Outlet/>
      </div>   
      <Footer/>
    </div>
  );
};

export default App;
