async function fetchDataAndDisplayNews() {
  try {
    const apiKey = 'c8ea8fa343e34258988e3fb896239e1f';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    // Fetch news data
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Check if data.articles exists and is not empty
    if (!data.news || data.news.length === 0) {
      console.error('No news found');
      return;
    }

    // Display news
    const newsContainer = document.getElementById('news');
    data.news.forEach(article => {
      const newsElement = document.createElement('div');
      newsElement.classList.add('news');
      newsElement.innerHTML = `
        <h2>${news.title}</h2>
        <p>${news.description}</p>
        <a href="${news.url}" target="_blank">Read more</a>
      `;
      newsContainer.appendChild(newsElement);
    });

    const news = await fetchNewsReport();
    if (!news) {
      // Handle the error gracefully, e.g., display a message to the user
      newsReportElement.innerHTML = '<p>Error fetching news report. Please try again later.</p>';
      return;
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to fetch data and display news
fetchDataAndDisplayNews();
