import React from 'react';
const date = new Date().toTimeString();
console.log(date);

export default function Navbar() {
    return (
        <div className='w-screen h-16  flex justify-evenly items-center'>
            <div className="h-10 w-52 bg-white rounded-md flex items-center">
                <input type="text" className='h-9 pl-3 border-none outline-none' placeholder='Search task' />
                <i className="fi fi-rr-search text-l text-black/70"></i>
            </div>

            <h2 className='text-[20px]'> {date} </h2>
            <div className='flex items-center'>
                <i className="fi fi-rs-bell text-xl"></i>
                <button className='text-black/60  rounded-sm ms-3 bg-white h-14 w-32 hover: text-black'>+ Create Event</button>

            </div>
        </div>
    );
}

