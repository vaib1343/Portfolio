import React from 'react';
import PropTypes from 'prop-types';

function Avatar(props) {
    const { image } = props;
    return (
        <div>
            <img className='m-auto h-[10rem] w-[10rem] rounded-full ring-2 ring-white' src={image} alt='' />
        </div>
    );
}

Avatar.propTypes = {
    image: PropTypes.string,
};
export default Avatar;
