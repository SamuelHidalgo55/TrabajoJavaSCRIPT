document.addEventListener("DOMContentLoaded", function () {
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');
            data.news.forEach(newsItem => {
                const newsDiv = document.createElement('div');
                newsDiv.classList.add('news-item');
                newsDiv.innerHTML = `
                   <br> <h3>${newsItem.title}</h3>
                    <p>${newsItem.content}</p>
                    <small>Fecha: ${newsItem.date}</small <br> 
                    
                `;
                newsContainer.appendChild(newsDiv);
            });
        })
        .catch(error => console.error('Error cargando las noticias:', error));
});
