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
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="home.html">Action</a></li>
    <li><a class="dropdown-item" href="home.html">Another action</a></li>
    <li><a class="dropdown-item" href="home.html">Something else here</a></li>
  </ul>
</div>
    );
};

export default Location;