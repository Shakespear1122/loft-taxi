import React from 'react';

function TextInput({ labeltext, inputType, placeholder, isLabel, required }) {
    return (
        <>
            {isLabel && (<label>{labeltext}</label>)}
            <input 
                type={inputType}
                placeholder={placeholder}
                required={required}
            >
            </input>
        </>
    )
};

export default TextInput;