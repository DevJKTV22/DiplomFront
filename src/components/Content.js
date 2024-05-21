import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Thankyou from '../pages/Thankyou';
import Contacts from '../pages/Contacts';
import Donation from '../pages/Donation';
import Catalog from '../pages/Catalog';
import CatDetail from '../pages/CatDetail';
import Blog from '../pages/Blog';
import BlogDetails from '../pages/BlogDetails';
import Clinic from '../pages/Clinic';

import Login from './Login';
import Profile from './Profile';
import Logout from './Logout';
import Register from './Register';

import PostsList from "../actions/PostList";
import EditPost from "../actions/EditPost";
import AddPost from "../actions/AddPost";

import AddCat from '../pages/NewCat';
import PrivateRoute from "./Privateroute";

export default function Content() {
    return(
        <main className="w-full">
            <Router>
                <Routes>
                    <Route exact path="/" element= {<Home/>}/>
                    <Route exact path="/thx" element= {<Thankyou/>}/>
                    <Route exact path="/catalog/:id" element= {<CatDetail/>}/>
                    <Route exact path="/catalog" element= {<Catalog/>}/>
                    <Route exact path="/news/:id" element= {<BlogDetails/>}/>
                    <Route exact path="/news" element= {<Blog/>}/>
                    <Route path="/donation" element= {<Donation/>}/>

                    

                    <Route path="/contact" element= {<Contacts/>}/>
                    <Route exact path="/clinic" element= {<Clinic/>}/>
                    
                    <Route exact path="/login" element= {<Login/>}/>
                    <Route exact path="/register" element= {<Register/>}/>
                    <Route exact path="/profile" element= {<Profile/>}/>
                    <Route exact path="/logout" element= {<Logout/>}/>
                    
                    

                    
               
                    <Route path="/addcat" element= {<PrivateRoute allowedRoles={['user', 'admin']} element={<AddCat />} />} />
                    <Route exact path="/postlist" element={<PrivateRoute allowedRoles={['admin']} element={<PostsList />} />} />
                    <Route exact path="/postedit/:id" element={<PrivateRoute allowedRoles={['admin']} element={<EditPost />} />} />
                    <Route path="/addpost" element={<PrivateRoute allowedRoles={['admin']} element={<AddPost />} />} />




                </Routes>
            </Router>

        </main>
    );
}