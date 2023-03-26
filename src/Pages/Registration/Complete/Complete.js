import React from 'react';
import { Link } from 'react-router-dom';

const Complete = () => {
    return (
        <div className='sand-to-blue text-center py-60'>
            <h1 className=' text-5xl banner-title text-[#7d1443]'>REGISTRATION DONE</h1>
            <p>Go to this link to see total registered students</p>
            <Link to='/students'>
                <button className="btn btn-outline banner-title shadow-2xl px-20 hover:bg-[#7d1443]">click here</button>
            </Link>
        </div>
    );
};

export default Complete;