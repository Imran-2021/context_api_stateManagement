import React, { useContext } from 'react';
import { CategoryContext } from '../App';
import GrandChild from './grandChild';

const Shipment = () => {
    const [counttt,setCounttt] = useContext(CategoryContext)
    return (
        <div>
            <h4>this is home :- {counttt}</h4>
            <button onClick={()=>setCounttt(counttt-1)}>de-crease</button>
            <GrandChild/>
        </div>
    );
};

export default Shipment;