const apiKey = "b48598c730d64b98bf594bef961ed059";

const blogContainer = document.getElementById("blog-container");
const searchField = document.getElementById("search-input");
const searchbutton = document.getElementById("search-button");

async function randomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch(error){
        console.error("Error in fetching random NEWS..",error);
        return [];
    }
}

searchbutton.addEventListener('click',async()=>{
    const query = searchField.value.trim();
    if(query!=""){
        try{
            const articles = await fetchNews(query);
            displayblogs(articles)
        }catch(error){
            console.log("Error fetch news by query",error);
        }
    }
})

async function fetchNews(query){
    try{
        const apiUrl = `
        https://newsapi.org/v2/everything?q=${query}&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch(error){
        console.error("Error in fetching random NEWS..",error);
        return [];
    }
}


function displayblogs(articles){
    blogContainer.innerHTML="";
    articles.forEach((article) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog");

        const img = document.createElement("img");
        img.src = article.urlToImage ? article.urlToImage : 'https://via.placeholder.com/600x400';
        img.alt = article.title;

        const title = document.createElement("h2");
        const trunctitle = article.title.length >30? article.title.slice(0,30)+"...":article.title;
        title.textContent = trunctitle;

        const description = document.createElement("p");
        const truncdes = article.description.length >120? article.description.slice(0,120)+"...":article.description;

        description.textContent = truncdes;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.addEventListener('click',()=>{
            window.open(article.url,"_blank");
        });
        blogContainer.appendChild(blogCard);
    });
}

(async () => {
    try {
        const articles = await randomNews();
        displayblogs(articles);
    } catch(error){
        console.error("Error in async random NEWS",error);
    }
})();
