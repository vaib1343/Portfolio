import React, { Children } from 'react';
import PropTypes, { string } from 'prop-types';

function Button(props) {
    const { color, className, children, ...remainingProps } = props;
    return (
        <button {...remainingProps} className={`bg-${color}-500 hover:bg-${color}-700 font-bold rounded focus:outline-none focus:shodow-outline py-2 px-4 ${className}`}>
            {children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    color: string,
};

export default Button;
