const generateMemeBtn = document.querySelector(".meme-generator .generate-btn");
const memeImg = document.querySelector(".meme-generator img");
const memeTit = document.querySelector(".meme-generator .meme-title");
const memeAuth = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url,title,author) =>{
    memeImg.setAttribute("src",url);
    memeTit.innerHTML = title;
    memeAuth.innerHTML = `Meme By : ${author}`;
};

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then(data => {
            updateDetails(data.url,data.title,data.author)
        });
};
generateMemeBtn.addEventListener("click",generateMeme);

generateMeme();