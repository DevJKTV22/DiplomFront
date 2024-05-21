import React from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddDonation() {
    
    const [author, setAuthor] = React.useState('');
    const [text, setText] = React.useState('');
    const [summ, setSumm] = React.useState('5');
    const navigate = useNavigate();
    
    const savePost = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`https://diplomback-f1217ff0e554.herokuapp.com/donation`, {
          
          author: author,
          text: text,
          summ: summ,
        });
  
        navigate(`/thx`)
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    };
    return(
        
    
            
                <div className="p-6 bg-white opacity-95  border  shadow">
                    <div className="flex items-center justify-center font-black m-3 mb-12">
                    
                    <h1 className="tracking-wide text-3xl text-gray-900">Make world better</h1>
                    </div>
                    <form id="login_form" onSubmit={savePost} method="POST"
                    className="flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-3">
                        <div className="inline-flex items-center self-start">
                    
                        <span className="font-bold text-gray-900">Amount $</span>
                        </div>
                        <div className="flex">
                        {}
                        <input id="item_count" type="number" name="summ"  onChange={(e) => setSumm(e.target.value)} min="5" className="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
                        block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
                        focus:outline-none
                        focus:border-sky-500
                        focus:ring-1
                        focus:ring-sky-500
                        focus:invalid:border-red-500  focus:invalid:ring-red-500"/>
                        {}
                        </div>
                    </div>
                        <label className="text-sm font-medium">From</label>
                        <input className="mb-3 px-2 py-1.5
                        mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                        focus:outline-none
                        focus:border-sky-500
                        focus:ring-1
                        focus:ring-sky-500
                        focus:invalid:border-red-500 focus:invalid:ring-red-500"
                         onChange={(e) => setAuthor(e.target.value)}
                         type="text" name="author" placeholder="Name"/>
                        <label className="text-sm font-medium">Messages (optional)</label>
                        <textarea className="
                        mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                        focus:outline-none
                        focus:border-sky-500
                        focus:ring-1
                        focus:ring-sky-500
                        focus:invalid:border-red-500 focus:invalid:ring-red-500" name="text" placeholder="Your message" onChange={(e) => setText(e.target.value)}></textarea>
                        <button className="px-4 py-1.5  font-medium text-gray-100 bg-gray-400 hover:bg-gray-500 block transition duration-300" type="submit" >
                        <span id="login_process_state" className="hidden">Sending </span>
                        <span id="login_default_state">Donate<span id="subtotal"></span></span>
                        </button>
                    </form>
                    
                </div>
            
        


    );
}