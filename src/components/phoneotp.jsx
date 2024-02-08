import React, { useRef, useState } from 'react';

import Otpinput from './Otpinput'; // Adjust the path if necessary

const PhoneOtp = () => {
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);

    
       

  const phoneHandle = (e) => {
    setPhone(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;

    if (phone.length < 10 || regex.test(phone)) {
      alert('Invalid phone number');
    } else {
      setShowOtp(true);
    }
  };
 
   const onOtpSubmit=(otp)=>{
        
    console.log("log in successful ",otp)
   }
  return (
    <div>
      {!showOtp ? (
        <form onSubmit={submitHandle}>
          <input
            type='text'
            value={phone}
            placeholder='Enter phone number'
            onChange={phoneHandle}
          />
          <button type='submit'>Submit</button>
        </form>
      ) : (
        <div className='box1'>
          <p>Enter OTP sent to {phone}</p>
        

          <Otpinput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtp;
