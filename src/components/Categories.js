import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Categories({ catId, onClickCategory }) {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get(`https://diplomback-f1217ff0e554.herokuapp.com/categories`);
            setCategory(response.data);
        };
        getCategory();
    }, []);

    return (
        <select
            className="border h-10 w-2/3 my-2 shadow text-xl"
            value={catId}
            onChange={(e) => onClickCategory(Number(e.target.value))}
        >
            <option value={0} className="p-2 ">All</option>
            {categories.map((data) => (
                <option value={data.id} key={data.id} className=" p-2">
                    {data.name}
                </option>
            ))}
        </select>
    );
}