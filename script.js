let wordCloud = ["Hello", "hii", "how", "what","you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordContainerEl = document.getElementById("wordContainer");
let userInputEl = document.getElementById("userInput");
let addButtonEl = document.getElementById("addButton");
let errorMessageEl = document.getElementById("errorMessage");

let errorMessage= "Please Enter a word";


function createAndAddWordToWordCloud(word) {

    let randomFontSize = Math.ceil( Math.random() * 40) + "px";

    let wordEl = document.createElement("span");
    wordEl.classList.add("random");
    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize;
    wordContainerEl.appendChild(wordEl);

};

for (let word of wordCloud) {
    createAndAddWordToWordCloud(word);
}

function onAddWordToWordCloud() {
    let userEnteredWord = userInputEl.value;
    
    if(userEnteredWord !== "") {
        userInputEl.value = "";
        errorMessageEl.textContent = "";
        createAndAddWordToWordCloud(userEnteredWord);
    } else {
        errorMessageEl.textContent = errorMessage;
    }
};