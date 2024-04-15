async function fetchNewsFromGitHub() {
    try {
        const repoUrl = 'https://raw.githubusercontent.com/exampleuser/news-repo/main/news.json';
        const response = await fetch(repoUrl);
        const data = await response.json();
        return data.articles; // Assuming news data is structured similarly to the NewsAPI response
    } catch (error) {
        console.error('Error fetching news from GitHub:', error);
        return null;
    }
}

async function displayNews() {
    try {
        const news = await fetchNewsFromGitHub();
        if (!news) {
            document.getElementById('news').innerHTML = '<p>Error fetching news. Please try again later.</p>';
            return;
        }
        const newsContainer = document.getElementById('news');
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
    } catch (error) {
        console.error('Error displaying news:', error);
    }
}

displayNews();
