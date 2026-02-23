const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inputWord = document.getElementById("input-word").value;
    fetch(`${url}${inputWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                <h3>${inputWord}</h3>
                <button>
                <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partsOfSpeech}</p>
                <p>/sample/</p>
            </div>
            <p class="word-meaning">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, sunt.
            </p>
            <p class="word-example">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, illum!</p>`;
        });
});