import React from 'react';
import PropTypes from 'prop-types';

function Heading(props) {
    const { className, size, weight, children, ...remainingProps } = props;
    return (
        <p className={`text-${size} text-gray-500 font-${weight} mb-2 ${className}`} {...remainingProps}>
            {children}
        </p>
    );
}

Heading.propTypes = {
    size: PropTypes.string,
    weight: PropTypes.string,
};

export default Heading;
