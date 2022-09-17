import React from 'react';
import PropTypes from 'prop-types';

function Tag(props) {
    const { children, className, ...remainingProps } = props;
    return (
        <span {...remainingProps} className={`bg-white px-5 py-3 text-gray-500 hover:bg-gray-200 hover:text-black rounded-xl m-1 ${className}`}>
            {children}
        </span>
    );
}

Tag.propTypes = {
    className: PropTypes.string,
    // children: PropTypes.element,
};

export default Tag;
