import React, { useState, useEffect} from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserId] = useState('');
    const [role, setRole] = useState('');

    const navigate = useNavigate();

    useEffect(() =>{
        getProfile();
    }, []);
    const getProfile = async ()=>{
        try {
            const token = window.localStorage.getItem('token');
            const decoded = jwtDecode(token);
            setName(decoded.name);
            setEmail(decoded.email);
            setRole(decoded.role);
            setUserId(decoded.userId);

            console.log(decoded.name+ '!!');

        }catch (error) {
            if (error.response) {
                navigate('/');
            }
        }
    };
    return(
        <section>
            <h2>Welcome back: {name}</h2>
            <table> 
                <thead>
                    <th># User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </thead>
                <tbody>
                    <td>{userID}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{role}</td>
                </tbody>
            </table>
        </section>
        
    
    );
}