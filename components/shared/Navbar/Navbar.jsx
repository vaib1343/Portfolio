import { useRouter } from 'next/router';
import React from 'react';
import Avatar from '../../common/Avatar/Avatar';

const MENU = [
    { name: 'Personal Info', route: '/' },
    { name: 'Blogs', route: '/blogs' },
    { name: 'Project', route: '/project' },
];

function Navbar() {
    const router = useRouter();
    return (
        <div className='mt-[5rem] text-center'>
            <Avatar image={'/person.jpeg'} />
            <h1 className='mt-5 text-gray-700 text-4xl font-bold'>Vaibhav Varshney</h1>
            <h3 className='mt-3 text-gray-600 text-xl font-semibold'>Front-end Developer</h3>
            <div className='m-auto mt-5 flex justify-around bg-white w-[50%] p-4 rounded-md'>
                {MENU.map((el) => (
                    <span key={el.name} onClick={() => router.push(el.route)} className='bg-white px-5 py-3 text-gray-500 hover:bg-gray-200 hover:text-black rounded-xl cursor-pointer'>
                        {el.name}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
