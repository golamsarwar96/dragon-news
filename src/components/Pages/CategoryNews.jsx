import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h1 className="font-semibold mb-3">Dragon News Home</h1>
      <div className="mb-3">
        {news.map((singleNews) => (
          <NewsCard key={singleNews.id} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
