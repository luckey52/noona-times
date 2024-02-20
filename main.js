const API_KEY = "b6514b7a92d34fa18407c14d9fd7ad2c";
let news = [];
const getLatestNews = async () => {
  const url = new URL(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}"
  );
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("dddd", news);
};

getLatestNews();
