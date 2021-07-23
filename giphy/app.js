const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";

const API_KEY ="Nzh0ayeodboCqspdEGPSz8FIi3J7k23L" 

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchGIF();
});

async function fetchGIF(){
    const baseURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchQuery}&limit=21`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.data);
}

function generateHTML(results) {
  container.classList.remove("initial");
  let generatedHTML = "";
  results.map((result) => {
    generatedHTML += `
      <div class="item">
        <img src="${result.images.original.url}" alt="img">
        <div class="flex-container">
          <a class="view-btn" target="_blank" href="${result.images.original.url}" >URL</a>
        </div>
      </div>
    `;
  });
    searchResultDiv.innerHTML = generatedHTML;
}

