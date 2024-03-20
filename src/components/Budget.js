import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] =  useState(budget);
    
    const handleBudgetChange = (event) => {
        if (event.target.value > 2000){
            alert("The value cannot exceed remaining funds of x");
        } else if (event.target.value < 2000){
            alert("You cannot reduce the budget value lower than the spending")
        }
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;