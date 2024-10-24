import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ForgetPassword = () => {

  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:1001/forgotPassword' ,{email},{withCredentials : true},
      {
        headers : {
          Authorization : 'Bearer '
        }
      }
    )
    .then(()=>{
      navigate('/otp')
    }).catch(()=>{
      alert('OTP Not Sent')
    })
  }

  return (
    <div className='h-[100vh] flex justify-center p-5'>
      <div className='w-[60%] mt-5 pt-5'>
        <div className='flex justify-between mt-5'>
          <h1>Apple Account</h1>
          <a href="" className='text-end'>FAQ</a>
        </div>
        <hr className='w-full mt-2 mb-5' />
        <div>
          <h1 className='text-[26px] mt-5 mb-5'>Reset your password</h1>
        </div>
        <div className='flex justify-between'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
              <h1 className='text-[20px]'>Enter your email address that you use with your account to continue.</h1>
              <label for="exampleInputPassword1" class="form-label mt-5">Email</label>
              <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className='mt-2 border w-[70%] p-3 rounded-md' />
              <button type='submit' className='mt-3 mb-4 border w-[130px] py-2 rounded-lg bg-blue-900 text-white font-semibold hover:bg-transparent hover:border-blue-900 hover:text-black'>Submit</button>
              <h1 className='text-gray-700 text-[18px]'>New to Store ? <a href="/signup" className='text-blue-900'>Create an Account</a></h1>
            </form>
          <div className='h-[250px] border'></div>
          <div className='w-[260px]'>
            <p>You have come to the right place to reset a forgotten password. For your security, we will ask you a few questions to verify that you are the owner of this account.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgetPassword
