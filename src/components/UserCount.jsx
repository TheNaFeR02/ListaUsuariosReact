import React from 'react';
import './styles/UserCount.css';

const UserCount = () => {
    
    const handleClick = () => {
        console.log("asdasdas");
        return 2;
    }

    return(
        <div className='count'>
            <h2 className=''>Contador de usuarios</h2>
            <h3>10</h3>
            <button onClick={handleClick}>Mi botón</button> 
        </div>
    );
}

export default UserCount;