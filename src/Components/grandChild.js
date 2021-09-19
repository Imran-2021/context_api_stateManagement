import React, { useContext } from 'react';
import { CategoryContext } from '../App';
const GrandChild = () => {
    const count = useContext(CategoryContext)
    return (
        <div>
            <h3>grandChild : {count}</h3>
        </div>
    );
};

export default GrandChild;
