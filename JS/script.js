const apiKey = 'c8ea8fa343e34258988e3fb896239e1f';

async function fetchNewsData() {
  try {
    const apiUrl = `const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c8ea8fa343e34258988e3fb896239e1f`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error('Error fetching news data:', error);
    return null;
  }
}

async function displayNews() {
  const newsContainer = document.getElementById('news');
  const news = await fetchNewsData();
  
  if (!news || news.length === 0) {
    newsContainer.innerHTML = '<p>Error fetching news data. Please try again later.</p>';
    return;
  }

  news.forEach(article => {
    const newsElement = document.createElement('div');
    newsElement.classList.add('article');
    newsElement.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;
    newsContainer.appendChild(newsElement);
  });
}

// Call the function to fetch and display news
displayNews();
