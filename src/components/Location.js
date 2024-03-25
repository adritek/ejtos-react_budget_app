import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);
    const [currName, setCurrName] = useState('£ Pound');

    const changeLocation = (val) => {
        switch (val) {
            case "$":
                setCurrName("$ Dollar")
                break;

            case "£":
                setCurrName("£ Pound")
                break;
            
            case "€":
                setCurrName("€ Euro")
                break;
                
            case "₹":
                setCurrName("₹ Ruppee")
                break;

            default:
                setCurrName("No match")
                break;
        }

        console.log(val)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };

    return (
        <div className="dropdown alert alert-success">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currName})
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/#" onClick={() => changeLocation('$')}>$ Dollar</a></li>
                <li><a className="dropdown-item" href="/#" onClick={() => changeLocation('£')}>£ Pound</a></li>
                <li><a className="dropdown-item" href="/#" onClick={() => changeLocation('€')}>€ Euro</a></li>
                <li><a className="dropdown-item" href="/#" onClick={() => changeLocation('₹')}>₹ Ruppee</a></li>
            </ul>
        </div>
    );
};

export default Location;