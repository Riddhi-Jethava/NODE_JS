import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const SignupPage = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        country: "",
        bDate: "",
        email: "",
        password: "",
        confirmPass: ""
    })
    const navigate = useNavigate()

    const handleInputChanges = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Done to submit");

        try {
            const response = await axios.post(
                "http://localhost:1001/userSignup",
                {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    // bDate: user.bDate,
                    country: user.country,
                    email: user.email,
                    password: user.password,
                },
            );
            navigate('/home')
            alert('Data Added Successfully');

        } catch (err) {
            console.log("Error While signing http://localhost:1001/userSignup");
            console.log(err);
            alert('Something Went Wrong');
        }
    };


    return (
        <div className='h-auto flex justify-center items-center flex-col p-5 bg-gray-100'>
            <header />
            <div className='w-[60%]'>
                <div className='flex justify-between'>
                    <h1>Apple Account</h1>
                    <a href="" className='text-end'>FAQ</a>
                </div>
                <hr className='w-full mt-2 mb-5' />

                <h1 className='text-[32px] text-center text-gray-800'>Create Your Apple Account</h1>
                <h1 className='semibold text-center cl
                mt-1 mb-5'>One Apple Account is all you need to access all Apple services.</h1>
                <form onSubmit={handleSubmit} className='bg-white flex flex-col justify-evenly w-[60%]  m-auto shadow-lg p-5 rounded-lg'>
                    <div className='flex justify-between pt-3'>
                        <input type="text" name="firstName" value={user.firstName} onChange={handleInputChanges} placeholder='first name' className='mt-2 border w-[47%] p-3 rounded-md' />
                        <input type="text" name="lastName" value={user.lastName} onChange={handleInputChanges} placeholder='last name' className='mt-2 border w-[47%] p-3 rounded-md' />
                    </div>
                    <label htmlFor="" className='text-gray-800 mt-3'>COUNTRY / REGION</label>
                    <input type="text" name="country" value={user.country} onChange={handleInputChanges} className='mt-2 border w-[70%] p-3 rounded-md' />
                    {/* <input type="date" name="bDate" value={user.bDate} onChange={handleInputChanges} placeholder='date of birth' className='mt-2 border w-[70%] p-3  rounded-md' /> */}

                    <hr className='mt-5 mb-5' />

                    <input type="text" name="email" value={user.email} onChange={handleInputChanges} placeholder='name@example.com' className='mt-2 border w-[70%] p-3 rounded-md' />
                    <p className='text-gray-800 mb-4'>This will be your new Apple Account.</p>
                    <input type="text" name="password" value={user.password} onChange={handleInputChanges} placeholder='password' className='mt-2 border w-[70%] p-3 rounded-md' />
                    <input type="text" name="confirmPass" value={user.confirmPass} onChange={handleInputChanges} placeholder='confirm password' className='mt-2 border w-[70%] p-3 mb-5 rounded-md' />
                    <button type='submit' className='b-5 border w-[130px] py-2 rounded-lg bg-blue-900 text-white font-semibold hover:bg-transparent hover:border-blue-900 hover:text-black'>Continue</button>
                    <h1 className='text-gray-800 text-[18px] flex mt-4'>Already have an account? <a href="/" className='text-blue-900 text-[18px]'> Log in</a></h1>
                </form>
            </div>
            <p className='w-[50%] mt-3 p-5 text-center text-[12px] text-gray-700'>Your Apple Account information is used to allow you to sign in securely and access your data. Apple records certain data for security, support and reporting purposes. If you agree, Apple may also use your Apple Account information to send you marketing emails and communications, including based on your use of Apple services. <a href="" className='text-blue-900'>See how your data is managed</a></p>
        </div>
    )
}

export default SignupPage
