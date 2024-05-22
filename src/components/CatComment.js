import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import AddCatComment from '../actions/AddCatComment';
import { jwtDecode } from 'jwt-decode';

export default function CatComment( ) {
    const [comments, setComments] = useState([]);
    const {id} = useParams();
    const [state, setState] = useState(false);
    const [role, setRole] = useState('');


    const fetchData = async () => {
      try {
        const response = await axios.get(`https://diplomback-f1217ff0e554.herokuapp.com/commentanimal/animal/${id}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

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
  
    useEffect(() => {
      fetchData();
      getMe();
    }, [id]);

    const handleCommentAdded = () => {
      
      fetchData();
    };
 
  return (
    <section>
    <div className="container px-5 pb-24 mx-auto ">
        <h2 className="text-lg font-bold mb-4">Comments</h2>
        <div className="flex flex-col space-y-4">
        {comments.map((data)=>(
            <div key={data.id} className="bg-white p-4  shadow-md mx-4">
                <h3 className="text-lg font-bold">{data.author_name}</h3>
                <p className="text-gray-700 text-sm mb-2">Posted on {data.createdAt}</p>
                <p className="text-gray-700">{data.text}
                </p>
            </div>
            
            
            ))} 

          {state ? (
            <AddCatComment onCommentAdded={handleCommentAdded}/> 
          ):(
            <></>
          )}


            

        </div>
    </div>
</section>
  );
}