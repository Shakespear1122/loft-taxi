import React from 'react';
import PropTypes from 'prop-types';

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

TextInput.propTypes = {
    labeltext: PropTypes.string,
    inputType: PropTypes.string,
    placeholder: PropTypes.string,
    isLabel: PropTypes.bool.isRequired,
    required: PropTypes.bool,
};

export default TextInput;