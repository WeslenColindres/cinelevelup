import React from 'react';

import './input.scss';

const Input = props => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            name={props.name}
            onChange={props.onChange ? (e) => props.onChange(e) : null}
        />
    );
}

export default Input;
