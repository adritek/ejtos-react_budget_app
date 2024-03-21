import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] =  useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000){
            alert('The value cannot exceed more than 20,000')
            setNewBudget(budget);
        } else if (event.target.value < totalExpenses){
            alert('You cannot reduce the budget value to be lower than the spending');
            setNewBudget(budget);
        } else {
            setNewBudget(event.target.value);
            dispatch({
                type: "SET_BUDGET",
                payload: event.target.value,
            });
        }
       
    }
    return (
        <div className='alert alert-secondary'>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;