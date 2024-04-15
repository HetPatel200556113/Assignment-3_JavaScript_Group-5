async function fetchDataAndDisplayNews(retries = 3, delay = 1000) {
  try {
    const apiKey = 'c8ea8fa343e34258988e3fb896239e1f';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    // Retry logic
    for (let i = 0; i < retries; i++) {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        // Process data and display news
        return data;
      } else if (response.status === 426) {
        throw new Error('The server requires an upgrade to a different protocol. Please try again later.');
      } else {
        console.error(`Failed to fetch news data: ${response.statusText}`);
      }
      await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
    }
    throw new Error('Failed to fetch news data after multiple attempts.');
  } catch (error) {
    console.error('Error:', error);
    // Handle errors gracefully, e.g., display a message to the user
  }
}

// Call the function to fetch data and display news
fetchDataAndDisplayNews();
