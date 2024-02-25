
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { getCurrencySymbol } from './AllocationForm'; // Importing the named export

const ExpenseTotal = () => {
    const { currency, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {getCurrencySymbol(currency)}{totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;