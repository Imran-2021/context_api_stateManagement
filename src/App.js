import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Shipment from './Components/Shipment';
export const CategoryContext = createContext()
function App() {
  const [countt,setCountt]=useState(0)
  return (
    <CategoryContext.Provider value={[countt,setCountt]}>
        <Home/>
        <Header/>
        <Shipment/>
    </CategoryContext.Provider>
  );
}
export default App;
