import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (

        <div className='row'>

        <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="currency">Currency ({currency})</label>
              </div>
              <select id="currency" value={currency} onChange={handleCurrencyChange}>
              <option value="£ Pound" name='pound'> £ Pound</option>
                <option value="$ Dollar" name='dollar'> $ Dollar</option>
                <option value="€ Euro" name='euro'> € Euro</option>
                <option value="₹ Rupee" name='ruppee'> ₹ Rupee</option>
              </select>

              </div>
              </div>

       
    );
};

export default CurrencySelector;
