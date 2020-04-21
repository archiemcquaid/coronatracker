import React from 'react';
import DigitRoll from "digit-roll-react";

const Stat = ({value, label, className}) => {
    return (
        value ? (
            <div className={`global-stat ${className || ''}`} >
                <p>{label}</p>
                <DigitRoll num={value} length={value.toString().length} divider=","/>
            </div>) : (null)
    );
};

export default Stat;