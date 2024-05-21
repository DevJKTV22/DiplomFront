import React from 'react';
import axios from '../middleware/axios.js';
import {jwtDecode} from 'jwt-decode';
import {useNavigate} from 'react-router-dom';

export default function AddPost(){
    const [categories, setCategory] =React.useState([]);
    const [userId, setUserId] = React.useState('');

    React.useEffect(() =>{
        const getCategory = async () =>{
            const response = await axios.get(`http://localhost:5000/categories`);
            setCategory(response.data);
        };
        getCategory();
        getProfile();

    }, []);


    const [title,setTitle] =React.useState('');
    const [news_text,setNews_text] =React.useState('');
    const [file,setFile] =React.useState('');
    const [categoryId,setCategoryId] =React.useState('');
    const [author_name,setAuthorName] =React.useState('');
    


    const getProfile = async () =>{
        try {
            const token = window.localStorage.getItem('token');
            const decoded = jwtDecode(token);
            setUserId(decoded.userId);
            

        }catch (error){console.error(error)}
    };

    
    const [image, setImage]= React.useState({preview: '',data: ''});
    const handleFileChange = (e) =>{
        const img ={
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
        setFile(img.data.name);

    };

    const navigate = useNavigate();
    const savePost = async (e) =>{
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/posts`, {
                title: title,
                news_text: news_text,
                category_id: categoryId,
                userId: userId,
                author_name: author_name,
                photo: file,
            });
            let formData = new FormData();
            formData.append('file',image.data);
            await fetch(`http://localhost:5000/image`, {
                method: `POST`,
                body:formData,
            });
            navigate(`/postlist`);

        }catch (error) {
            navigate(`/addpost`);
        }
    };





    return (

        
        

        <section className='w-full flex flex-col items-center border h-screen' >
          <div className="container  flex flex-col items-center px-4">
            <h1 className="font-heading my-8 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl">Add new post</h1>
            <div className="  w-full md:w-11/12 xl:w-1/2">
              <form className="bg-gray-100 p-4 shadow-md w-full">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="author">Author</label>
                  <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="author" type="text" placeholder="Enter author name"
                    value={author_name} onChange={(e) => setAuthorName(e.target.value)}/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="category">Category</label>
                  <select className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category" value={categoryId} onChange={(e) => setCategoryId(Number(e.target.value))}>
                                {categories.map((data) => (
                                    <option value={data.id} key={data.id} className="p-2">
                                        {data.name}
                                    </option>
                                ))}
                            </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Title</label>
                  <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title" type="text" placeholder="Enter post title"
                    value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="text">Text</label>
                  <textarea className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="text" rows="3" placeholder="Enter your comment"
                    value={news_text} onChange={(e) => setNews_text(e.target.value)}></textarea>
                </div>
                <div className="mb-4 flex flex-col md:flex-row md:justify-between">
                    <input className="border w-1/2 h-1/2" type="file" id="imageInput" filename={file}  onChange={handleFileChange}  /> 
                    <div className="md:w-1/2 p-2 w-full  h-64" >
                      <div className="w-full h-full" id="imagePreview">{image.preview && <img className=" object-fit w-full h-full" id="preview" src={image.preview} alt="Preview" />}</div>
                        
                    </div>
                    
                </div>
                <button className="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  type="submit" onClick={savePost}>Submit</button>
              </form>
            </div>
          </div>
        </section>

    );
}