
import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import './Registration.css';
import { useNavigate } from 'react-router-dom';


const Registration = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    console.log(data);


    const onSubmit = (data) => {
        fetch('https://alumni-registration-page-server.vercel.app/registeredStudent3', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setData(data);
                console.log(data);
                // alert('DONE');
                setTimeout(() => {
                    navigate('/complete');
                }, 500);
            })
    }

    return (
        <div className='reg-section rounded-lg'>

            <div className='grid grid-cols-4 items-center '>

                <div></div>

                <h1 className='text-center text-5xl font-bold font-fam text-[#7d1443]'>Registration Open</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl p-8 bg-white">

                    <div className="form-control w-full max-w-xs mb-2">
                        <input {...register("name")} type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" required />
                    </div>

                    <div className="form-control w-full max-w-xs mb-2">
                        <input {...register("dept")} type="text" placeholder="Department" className="input input-bordered w-full max-w-xs" required />
                    </div>

                    <div className="form-control w-full max-w-xs mb-2">
                        <input {...register("batch")} type="text" placeholder="Batch" className="input input-bordered w-full max-w-xs" required />
                    </div>

                    <div className="form-control w-full max-w-xs mb-2">
                        <input {...register("S_ID")} type="text" placeholder="Student ID" className="input input-bordered w-full max-w-xs" required />
                    </div>

                    <div className="form-control w-full max-w-xs mb-2">
                        <input {...register("number")} type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" required />
                    </div>

                    <div className='my-4'>
                        <button className="btn btn-block btn-outline hover:bg-[#7d1443]">Click Here to Register</button>
                    </div>

                </form>


            </div>


        </div>
    );
};

export default Registration;