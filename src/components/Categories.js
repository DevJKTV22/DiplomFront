import React, { useState, useEffect } from "react";

export default function Categories({ catId, onClickCategory }) {
    const [categories, setCategory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://diplomback-f1217ff0e554.herokuapp.com/categories');
                if (!response.ok) {
                    throw new Error(`Failed to fetch categories: ${response.statusText}`);
                }
                const data = await response.json();
                if (!Array.isArray(data)) {
                    throw new Error('Fetched categories data is not an array');
                }
                setCategory(data);
            } catch (err) {
                setError(err.message);
                setCategory([]);
            }
        };
        fetchCategories();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <select
            className="border h-10 w-2/3 my-2 shadow text-xl"
            value={catId}
            onChange={(e) => onClickCategory(Number(e.target.value))}
        >
            <option value={0} className="p-2">All</option>
            {categories.map((data) => (
                <option value={data.id} key={data.id} className="p-2">
                    {data.name}
                </option>
            ))}
        </select>
    );
}
