import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('$')


    const changeLocation = (val) => {
        // dispatch({
        //     type: 'CHG_LOCATION',
        //     payload: val,
        // });
        console.log('changed currency: ',val);
    };

    return (
        <div className="dropdown alert alert-success">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" onChange={(event) => setCurrency(event.target.value)} aria-expanded="false">
                Currency ({currency}Pound)
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" value="$" href="/#">$ Dollar</a></li>
                <li><a className="dropdown-item" value="£" href="/#">£ Pound</a></li>
                <li><a className="dropdown-item" value="€" href="/#">€ Euro</a></li>
                <li><a className="dropdown-item" value="₹" href="/#">₹ Ruppee</a></li>
            </ul>
        </div>
    );
};

export default Location;