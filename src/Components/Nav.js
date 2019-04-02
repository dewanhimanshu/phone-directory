import React from 'react';
import './navbar.css'

const navbar = ( props ) => {
    return (
        <div className="nav">
          {props.children}
        </div>
    )
};

export default navbar;