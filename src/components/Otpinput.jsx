import React, { useEffect, useRef, useState } from 'react';

const Otpinput = ({ length = 4, onOtpSubmit = () => {} }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus();
        }
    }, []);

    const handlechange = (index, e) => {
        const value = e.target.value;

        if (isNaN(value)) return;

        const newOtp = [...otp];

        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        const combinedOtp = newOtp.join("");

        if (value && index < length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handlekeydown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleclick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);
    
        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus();
        }
    };
    

    return (
        <div className='box'>
            {otp.map((value, index) => (
                <input
                    key={index}
                    type='text'
                    ref={(input) => (inputRefs.current[index] = input)}
                    value={value}
                    onChange={(e) => handlechange(index, e)}
                    onKeyDown={(e) => handlekeydown(index, e)}
                    onClick={()=>{handleclick(index)}}
                    className='otpinput'
                />
            ))}
        </div>
    );
};

export default Otpinput;
