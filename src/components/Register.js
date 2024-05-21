import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const RegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://diplomback-f1217ff0e554.herokuapp.com/users/auth/register`,{
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
            });
            navigate('/login');   
        } catch (error){
            if (error.response) {
                setMsg('No register');
            }
        }
    };
    return (
        
        <section className="">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div className="w-full  border bg-gray-50 shadow     md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5"> Registration</h2>
              <form className="space-y-4 md:space-y-6" onSubmit={RegisterSubmit}>
                  <div>
                      <label for="name" className="block leading-7 text-sm text-gray-600">Your name</label>
                      <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Name (min 3 symbols)" required=""/>
                  </div>
                  <div>
                      <label for="email" className="block leading-7 text-sm text-gray-600">Your email</label>
                      <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block leading-7 text-sm text-gray-600">Password</label>
                      <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="•••••••• (min 6 symbols)" className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block leading-7 text-sm text-gray-600">Confirm password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder="••••••••" className="w-full bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required=""/>
                  </div>
                  
                  <button type="submit" className="w-full text-white bg-gray-400 border-0 py-2 px-8 focus:outline-none hover:bg-gray-500  text-lg">Create an account</button>
                  <p className="leading-7 text-sm text-gray-600">
                      Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    );
}