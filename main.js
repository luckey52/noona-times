let news = [];
const getLatestNews = async () => {
  const url = new URL("https://jocular-marigold-d9ab72.netlify.app/");
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("dddd", news);
};

getLatestNews();
