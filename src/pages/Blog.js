import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';

export default function Blog() {
    const [News, setNews] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [categories, setCategories] = useState([]);

    const fetchNews = async (categoryId) => {
        const url = categoryId === 0 ? `http://localhost:5000/posts/` : `http://localhost:5000/posts/category/${categoryId}`;
        const response = await fetch(url);
        const data = await response.json();
        setNews(data);
    };

    const fetchCategories = async () => {
        const response = await fetch('http://localhost:5000/categories/');
        const data = await response.json();
        setCategories(data);
    };

    useEffect(() => {
        fetchNews(selectedCategory);
        fetchCategories();
    }, [selectedCategory]);

    const getCategoryName = (categoryId) => {
        const category = categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Unknown';
    };
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    };

    return (
        <>
            <section>
                <div className="container mx-auto flex justify-end">
                    <div className='flex justify-end w-8/12 lg:w-4/12 items-center'>
                        <button className=' px-4  h-10  my-2 ho  w-1/2  text-xl text-right '>Select category</button>
                        <Categories catId={selectedCategory} onClickCategory={setSelectedCategory} />
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    {News.map((data) => (
                        <div key={data.id} className="mb-12 flex flex-wrap justify-center border shadow pb-4">
                            <div className="w-full shrink-0 grow-0 basis-auto px-3 bg-gray-50">
                                <h5 className="my-3 text-lg font-bold">{data.title}</h5>
                                <div className='flex justify-between'>
                                    <p className="block mb-4 text-neutral-500">
                                        <small>Published <u>{data.createdAt}</u> {"by: " + data.author_name}</small>
                                    </p>
                                    <p className="block mb-4 text-neutral-500">
                                        <small>Category: {getCategoryName(data.category_id)}</small>
                                    </p>
                                </div>
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto md:w-12/12">
                                <div className="relative mb-6 overflow-hidden bg-cover bg-no-repeat shadow-lg flex flex-col items-baseline" data-te-ripple-init data-te-ripple-color="light">
                                    <img src={'/images/' + data.photo} className="w-1/2 mx-auto my-4" alt="Post illustrative" />
                                </div>
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto px-3">
                                <p className="mb-6">
                                {truncateText(data.news_text, 200)}
                                </p>
                                <a
                                    className="inline-block bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                    href={'news/' + data.id} role="button">Read more</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}