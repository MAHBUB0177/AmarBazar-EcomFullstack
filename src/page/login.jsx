import React, { useState, } from 'react'
import axios from 'axios';
import { FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from "react-icons/fc";
import { login } from '../service';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
 
  //simple authentication part:
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    Password: "",
  });
  const LoginNow = async () => {
    let payload={
        username: userData?.email,
        password: userData?.Password,
      }
    if(userData?.email ==='' || userData?.Password === ''){
    message.error(`User Name Or Password Missing!`);
    }
    await login(payload)
    .then((res)=>{
     let user=res?.config.data
     console.log(res,'-------------------')
    //  user=JSON.parse(user)
     localStorage.setItem('user',JSON.stringify(user))
     if(res?.data?.access !==null & res?.data?.access !== undefined && res?.data?.access !==""){
    
       localStorage.setItem('token',JSON.stringify(res?.data?.access))
       localStorage.setItem('refreshtoken',JSON.stringify(res?.data?.refresh))
       navigate('/dashboard')
     }
    })
      .catch(error => {
        console.error('An error occurred:', error);
      });
  };


  return (
    <>
      <div className="py-16">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
            <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md bg-gray-100">
            <div className="px-4 py-3">
            <FcGoogle className='text-blue-600 h-[25px] w-[25px]'/>
            </div>
              <h1 className=" py-3 w-5/6 pr-[15px] text-gray-600 font-bold" >Sign in with Google</h1>
            </a>

            {/* //fb login */}

            <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md bg-gray-100">
              <div className="px-4 py-3">
                <FaFacebook className='text-blue-600 h-[25px] w-[25px]'/>
              </div>
              <h1 className=" py-3 w-5/6 pr-[15px] text-gray-600 font-bold" >Sign in with Facebook</h1>
            </a>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <a href="#" className="text-xs text-center font-medium text-gray-500 uppercase">or login with email</a>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 text-start">Email Address</label>
              <input autocomplete="none" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" onChange={(e) => {
                setUserData({
                  ...userData,
                  email: e.target.value,
                });
              }} />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              </div>
              <input autocomplete="none" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"  onChange={(e) => {
                setUserData({
                  ...userData,
                  Password: e.target.value,
                });
              }} />
              <a href="#" className=" flex text-sm font-medium justify-end text-gray-500">Forget Password?</a>
              
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600" onClick={LoginNow}>Login</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <a href="#" className="text-xs font-medium text-gray-500 uppercase">or sign up</a>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
