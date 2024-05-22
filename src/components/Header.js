import React, { useState, useEffect } from 'react';
import logo from '../assets/logoGray400.png';
import Content from './Content.js';
import { jwtDecode } from 'jwt-decode';

export default function Header(){
    const [state, setState] = useState(false);
    const [role, setRole] = useState('');

    useEffect(() => {
        getMe();
    },[]);
    const getMe = async () =>{
        try {
        const token =localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setRole(decoded.role);
            setState(true);
        } else {
            setState(false);
        }
    } catch (error){
        if (error.response) {
        }
    }
    };
    const onClickLogout = () => {
        localStorage.removeItem('token');
        
        window.location.reload();
    };
  return (
    <>
        <header className="  " >
            <div className="z-50 w-full mx-auto text-gray-600 body-font bg-gray-50 border ">
                <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center ">
                    <div className="w-2/12 flex flex-row justify-start ">
                        <img className="w-1/5 drop-shadow-md"  src={logo} alt="logo"  style={{width:'90px'}}/>
                        <div className=" w-full flex items-end">
                            <p className="drop-shadow-md bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent "><span className="text-lg underline"></span> <br></br> <span className="text-4xl font-bold "> Nine life</span>

                            </p>
                        </div>
                    </div>
                
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
                    <a className="mr-5 hover:text-gray-900 hower:drop-shadow-2xl text-2xl" href="/">Home</a>
                    <a className="mr-5 hover:text-gray-900 text-2xl" href="/news">News</a>
                    <a className="mr-5 hover:text-gray-900 text-2xl" href="/catalog">Find a Cat</a>
                    <a className="mr-5 hover:text-gray-900 text-2xl" href="/clinic">Clinic</a> 
                    {state ? (

                    <a className="mr-5 hover:text-gray-900 text-2xl" href="/addcat">Add cat</a>
                    ):(
                        <></>
                    )}
                    <a className="mr-5 hover:text-gray-900 text-2xl" href="/contact">Contact Us</a> 
                    {state && role ==='admin' ? (
                        <>
                        <a className="mr-5 hover:text-gray-900 text-2xl" href="/postlist">Admin</a>
                        </> 
                        ):(
                        <></>
                    )} 
                </nav>
                {state ? (
                    <>
                
                <button className="mr-5 hover:text-gray-900 text-2xl"  onClick={onClickLogout}>Logout</button>
                
                    </>
                ):(
                    <>
                <a className="mr-5 hover:text-gray-900 text-2xl" href="/login">Login</a>
                <a className="mr-5 hover:text-gray-900 text-2xl" href="/register">Register</a> 
                    </>
                )}
                <a className=" shadow inline-flex items-center text-white text-2xl bg-gray-400 border-0 py-1 mr-6 px-3 focus:outline-none hover:bg-gray-500   mt-4 md:mt-0" href="/donation">DONATE</a>
                </div>
            </div>
        </header>
        <Content  />
    </>
   
  );
}

/*

<Route path="/addcat" element= {<PrivateRoute allowedRoles={['user']} element={<AddCat />} />} />
                    <Route exact path="/postlist" element={<PrivateRoute allowedRoles={['user']} element={<PostsList />} />} />
                    <Route exact path="/postedit/:id" element={<PrivateRoute allowedRoles={['user']} element={<EditPost />} />} />
                    <Route path="/addpost" element={<PrivateRoute allowedRoles={['user']} element={<AddPost />} />} />
     
                    

                    <Route path="/addcat" element= {<AddCat />} />
                    <Route exact path="/postlist" element={<PostsList />} />
                    <Route exact path="/postedit/:id" element={<EditPost />} />
                    <Route path="/addpost" element={<AddPost />} />
*/
