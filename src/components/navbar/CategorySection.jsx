import React, { useState } from 'react';
import { Link } from "react-router-dom";
import categoriesData from './categories.json';
import './CategorySection.css';

const CategoryItem = ({ category, handleMouseEnter, handleMouseLeave }) => (
    <div
        className="category"
        onMouseEnter={() => handleMouseEnter(category.name)}
        onMouseLeave={handleMouseLeave}
    >
        <Link to="/" className="category-link px-1 d-flex align-items-center">
            <span>{category.name}</span>
        </Link>
        {category.subcategories && category.subcategories.length > 0 && (
            <div className="subcategories">
                {category.subcategories.map(subcategory => (
                    typeof subcategory === 'object' ? (
                        <div key={subcategory.name} className="subcategory-group">
                            <span className="subcategory-group-title">{subcategory.name}</span>
                            {subcategory.subcategories.map(subsubCategory => (
                                <Link key={subsubCategory} to="/" className="subcategory-link px-1 d-block">{subsubCategory}</Link>
                            ))}
                        </div>
                    ) : (
                        <Link key={subcategory} to="/" className="subcategory-link px-1 d-block">{subcategory}</Link>
                    )
                ))}
            </div>
        )}
    </div>
);

export const CategorySection = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const handleMouseEnter = (categoryName) => {
        setHoveredCategory(categoryName);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    return (
        <div className="category-section">
            {categoriesData.map(category => (
                <CategoryItem
                    key={category.name}
                    category={category}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
};
