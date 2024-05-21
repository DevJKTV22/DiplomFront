import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {    
            const response = await axios.post(`https://diplomback-f1217ff0e554.herokuapp.com/users/auth/login`,{
                email: email,
                password: password,
            });
            console.log(response.data.token);

            window.localStorage.setItem('token', response.data.token);
            navigate('/');
            window.location.reload();
        }catch (error) {
            if (error.response) {
                setMsg('Email or password wrong')
            }
        }
    };

    return(
        <section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full   border  md:mt-0 sm:max-w-md xl:p-0 bg-gray-50 shadow ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5"> Log In</h2>
              <form className="space-y-4 md:space-y-6" onSubmit={Auth}>
                  <p className="text-red-400">{msg}</p>
                  <div>
                      <label for="email" className="leading-7 text-sm text-gray-600">Your email</label>
                      <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                      <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="•••••••• (min 6 symbols)" className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""/>
                  </div>
                  
                  <button type="submit" className=" shadow w-full text-white bg-gray-400 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500  text-lg">Login</button>
                  <p className="text-sm leading-7 text-gray-500 ">
                      Do not have an account? <a href="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    );

}