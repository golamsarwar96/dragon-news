import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div className="w-5/6">
      <h1 className="font-semibold mb-3">All Category ({categories.length})</h1>
      <div className="flex flex-col gap-3">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn bg-transparent"
            key={category.id}
          >
            {category.category_name}
            {console.log(category.category_name)}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
