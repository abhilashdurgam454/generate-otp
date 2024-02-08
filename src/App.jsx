import './App.css';
import React from 'react';
import PhoneOtp from './components/phoneotp';

function App() {
  return (
    <>
      <h1 className='app'> This is an OTP Generator</h1>
      <PhoneOtp />
    </>
  );
}

export default App;
