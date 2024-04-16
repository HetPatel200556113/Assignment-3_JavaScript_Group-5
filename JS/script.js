async function fetchDataAndDisplayNews() {
  try {
    const apiKey = 'c8ea8fa343e34258988e3fb896239e1f';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    // Fetch news data
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.articles || !Array.isArray(data.articles)) {
      throw new Error('Invalid data format: articles array not found in response');
    }

    // Display news
    const newsContainer = document.getElementById('news');
    data.articles.forEach(article => {
      const newsElement = document.createElement('div');
      newsElement.classList.add('article');
      newsElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(newsElement);
    });
  } catch (error) {
    console.error('Error:', error);
    const newsContainer = document.getElementById('news');
    newsContainer.innerHTML = '<p>Error fetching news. Please try again later.</p>';
  }
}

// Call the function to fetch data and display news
fetchDataAndDisplayNews();
