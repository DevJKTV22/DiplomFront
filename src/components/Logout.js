import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    const onClickLogout = () => {
        

            window.localStorage.removeItem('token');
            navigate('/');
            window.location.reload();
        
    };

    return(
        <section>
            <h2>Logout</h2>
            <button onClick={onClickLogout} className="w-1/5 border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Logout</button>
        </section>
        
    );
}