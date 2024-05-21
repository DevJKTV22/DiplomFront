import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddCatComment({ onCommentAdded }) {
  const { id } = useParams();
  const [author_name, setAuthor_name] = React.useState('');
  const [text, setText] = React.useState('');
  const navigate = useNavigate();
  
  const savePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://diplomback-f1217ff0e554.herokuapp.com/commentanimal/`, {
        
        author_name: author_name,
        text: text,
        animal_id: id,
      });

      setAuthor_name('');
      setText('');

      onCommentAdded();
      
      navigate(`/catalog/${id}`)
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  return (
    <form className="bg-gray-100 p-4 shadow-md">
      <h3 className="text-lg font-bold mb-2">Add a comment</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="author_name">
          Name
        </label>
        <input
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="author_name" type="text" placeholder="Enter your name"
          value={author_name} onChange={(e) => setAuthor_name(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
          Comment
        </label>
        <textarea
          className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="text" rows="3" placeholder="Enter your comment"
          value={text} onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button
        className="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        type="submit" onClick={savePost}
      >
        Submit
      </button>
    </form>
  );
}