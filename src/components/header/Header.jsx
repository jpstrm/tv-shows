import React from 'react';
import './Header.css';

export default (props) => {
    return (
        <div className="header">
            <h1>{ props.title }</h1>
        </div>
    );
}
