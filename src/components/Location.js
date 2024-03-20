import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);
    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        });
    };

    return (
        <select className='alert alert-success' name="Location" id="inputGroupSelect03" value="ssss" onChange={event => changeLocation(event.target.value)}>
            <option defaultValue>Currency (£ Pound)</option>
            <option value="CAD">$ Dollar</option>
            <option value="€">€ Europe</option>
            <option value="₹">₹ India</option>
        </select>	
    );
};

export default Location;