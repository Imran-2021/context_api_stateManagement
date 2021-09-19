import React, { useContext } from 'react';
import { CategoryContext } from '../App';

const Home = () => {
    const count = useContext(CategoryContext)
    return (
        <div>
            <h2>this is home :- {count}</h2>
        </div>
    );
};

export default Home;