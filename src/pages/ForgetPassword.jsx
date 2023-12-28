import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function ForgetPassword() {
  const handleGenerateToken = async () => {
    try {
     
      const email = document.getElementById('email').value;

     
      const response = await axios.post('https://mooc.code69.my.id/forget-password/generate-token', {
        emailAddress: email,
        // data: response.data,
      });

     
      console.log('Token generated successfully:', response.data);

     
    } catch (error) {
      
      console.error('Error generating token:', error.message);
    }
  };

  return (
    <div className='container-fluid' style={{ width: '1440px', height: '950px', top: '-987px', left: '1575px' }}>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <form style={{ width: '452px', height: '348px', top: '301px', left: '158px' }}>
            <h2>Reset Password</h2>
            <div className='mb-3'>
              <label htmlFor='email' className='form-tabel'>
                Masukkan email
              </label>
              <input
                type='text'
                className='form-control rounded-pill'
                id='email'
                placeholder='Enter your email'
                style={{ width: '452px', height: '48px', top: '22px', left: '0px' }}
              />
            </div>
            <button
              type='button'
              className='btn btn-primary rounded-pill'
              onClick={handleGenerateToken}
              style={{ width: '452px', height: '48px', top: '8px', left: '0px' }}
            >
              Request reset password 
            </button>
          </form>
        </div>
        <div className='col-md-6'>
          <img src='/images/img.jpg' alt='Side Image' className='img-fluid' />
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
