import React from 'react';
import { useQuery } from 'react-query';

const StudentList = () => {

    const { data: list = {} } = useQuery({
        queryKey: ['registeredStudent'],
        queryFn: () => fetch('https://alumni-registration-page-server.vercel.app/registeredStudent3')
            .then(res => res.json())
    });

    console.log(list);

    return (
        <div className='p-40'>
            <h1 className='font-bold text-center text-5xl text-[#7d1443]'>
                Till Now {list.length} Students Registered Here
            </h1>

        </div>
    );
};

export default StudentList;