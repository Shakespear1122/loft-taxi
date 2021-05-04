import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, type }) {
    return (
        <button type={type} > 
            {children}
        </button>
    )
};

Button.propTypes = {
    type: PropTypes.string,
};

export default Button;