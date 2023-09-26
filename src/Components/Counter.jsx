import React, { useState } from 'react';

export default function Counter() {
    let value = 0;

    


    return (
        <div className='flex items-center justify-center h-5 text-3xl mt-11 flex-col'>
            <h1 className='mb-4'>Counter: {value}</h1>
            <button className='bg-black rounded-xl ms-3 text-white'>Decrement</button>
            

        </div>
    );
}

