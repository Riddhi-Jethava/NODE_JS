import React from 'react'


const OTP = () => {
  return (
    
    <div className='h-[100vh] bg-gray-200 flex justify-center flex-col items-center'>
      
      <form className='border w-[25%] h-[350px] rounded-lg flex flex-col justify-center items-center shadow-lg border border-gray-300 bg-white'>
        <h1 className='mt-5 ms-[-65%]'>OTP</h1>
        <input type="text" name="" id="otp" className='border w-[290px] py-2 rounded-lg mt-3'/>
        <button type='submit'className='mt-3 mb-4 border w-[290px] py-2 rounded-lg bg-blue-900 text-white font-semibold hover:bg-transparent hover:border-blue-900 hover:text-black'>Verify OTP</button>
      </form>
    </div>
  )
}

export default OTP
