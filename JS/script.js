async function fetchDataAndDisplayNews() {
  try {
    const apiKey = 'c8ea8fa343e34258988e3fb896239e1f';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    // Fetch news data
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if data.articles exists and is not empty
    if (!data.articles || data.articles.length === 0) {
      console.error('No news found');
      return;
    }

    // Display news
    const newsContainer = document.getElementById('news');
    data.articles.forEach(article => {
      const newsElement = document.createElement('div');
      newsElement.classList.add('news');
      newsElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(newsElement);
    });

    // Add code for fetching and handling news report here

  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to fetch data and display news
fetchDataAndDisplayNews();
