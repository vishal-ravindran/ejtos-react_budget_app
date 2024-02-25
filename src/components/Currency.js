import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    

    return (

        <div className="row">
        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
            <div className="input-group-prepend">
                <label className="input-group-text bg-success text-white" htmlFor="currency">Currency ({currency})
                </label>
            </div>
            <select 
                id="currency" 
                className="bg-success text-white hover:bg-primary-dark cursor-pointer"
                value={currency} 
                onChange={handleCurrencyChange}
            >
                <option value="£ Pound">£ Pound</option>
                <option value="$ Dollar">$ Dollar</option>
                <option value="€ Euro">€ Euro</option>
                <option value="₹ Rupee">₹ Rupee</option>
            </select>
        </div>
    </div>
       
    );
};

export default CurrencySelector;
