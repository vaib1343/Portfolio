import React from 'react';
import PropTypes from 'prop-types';

function Timeline(props) {
    const { data } = props;
    return (
        <ul className='relative border-l border-gray-500 '>
            <li className='mb-10 ml-10'>
                <div className='absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5'></div>
                <h3 className='text-gray-500 text-xl font-semibold'>Flipkart via Thinkify labs</h3>
                <time className='mb-1 text-sm font-normal leading-none text-gray-500 '>December 2021 - present</time>
                <p className='mb-4 text-base font-normal text-gray-500 font-medium'> Involved in designing the user experience interface UlUX strategy, UI requirements, and converting findings into Ul designs. Builded reusable React components with modular CSS, manage data on the client with Redux, and test everything with Jest. Investigated and resolved production issues with the help application support team. Contributed to the design and architecture of the project.</p>
            </li>
            <li className='mb-10 ml-10'>
                <div className='absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -left-1.5'></div>
                <h3 className='text-gray-500 text-xl font-semibold'>Enuke Software</h3>
                <time className='mb-1 text-sm font-normal leading-none text-gray-500 '>April 2021 - Dec 2021</time>
                <p className='mb-4 text-base font-normal text-gray-500 font-medium'>Worked as a front-end developer extensively with state management and API integrations, dynamic data, along with better practices of programming.</p>
            </li>
        </ul>
    );
}

Timeline.propTypes = {
    data: PropTypes.array,
};

export default Timeline;
