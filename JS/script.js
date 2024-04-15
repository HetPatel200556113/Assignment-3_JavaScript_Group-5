async function fetchDataAndDisplayNews() {
  try {
    const apiKey = 'c8ea8fa343e34258988e3fb896239e1f';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    // Fetch news data
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch news data');
    }
    const data = await response.json();

    // Check if data.articles exists and is not empty
    if (!data.articles || data.articles.length === 0) {
      throw new Error('No news articles found');
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

    // Fetching race schedule
    const raceSchedule = await fetchRaceSchedule();
    if (!raceSchedule) {
      throw new Error('Failed to fetch race schedule');
    }
    // Process race schedule if needed

  } catch (error) {
    console.error('Error:', error);
    // Handle errors gracefully, e.g., display a message to the user
  }
}

// Call the function to fetch data and display news
fetchDataAndDisplayNews();

// Function to fetch race schedule (assuming it's defined elsewhere)
async function fetchRaceSchedule() {
  try {
    const response = await fetch('https://example.com/race-schedule'); // Replace with actual API URL
    if (!response.ok) {
      throw new Error('Failed to fetch race schedule');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching race schedule:', error);
    return null;
  }
}
