import React, { useContext } from 'react';
import { CategoryContext } from '../App';

const Header = () => {
    const [count,setCount] = useContext(CategoryContext)
    return (
        <div>
            <h3>this is header :- {count}</h3>
            <button onClick={()=>setCount(count+1)}>in-crease</button>
        </div>
    );
};

export default Header;