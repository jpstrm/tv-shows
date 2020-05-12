import React from 'react';
import './Card.css';

/**
 * Card can be improved adding style when empty or pre-load image
 * @param props
 * @returns {*}
 */
export default (props) => {
    return (
        <div className={"Card " + (!props.hasImg ? 'no-img' : '')}>
            {props.children}
        </div>
    );
}
