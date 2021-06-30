/**
   * Array with image source links to be retrieved and inserted into the HTML when cards are created
   */

const myCard =[
   "img1px.jpg",
   "img1px.jpg",
   "img2px.jpg",
   "img2px.jpg",
   "img3px.jpg",
   "img3px.jpg",
   "img4px.jpg",
   "img4px.jpg",
   "img5px.jpg",
   "img5px.jpg",
   "img6px.jpg",
   "img6px.jpg",
   "img7px.jpg",
   "img7px.jpg",
   "img8px.jpg",
   "img8px.jpg",    
];

// Main menu section
const mainMenuSection = document.getElementById("main-menu-section");



// Game display section
const displayGame = document.getElementById("display-game");
const myPexesoCards = document.getElementById("my-pexeso");
const levelGame = document.querySelector("#chooseLevel span:nth-child(2)");
const back = document.getElementById("goBack");



//Create class
//this.name---->refers to the class



// Game my level modal for easy and hard

const easyButton = document.getElementById("easy");
easyButton.addEventListener("click", function(){
   chooseLevel("easy");
});

const hardButton = document.getElementById("hard");
hardButton.addEventListener("click", function(){
   chooseLevel("hard");
});



// Highscores modal



// Game win modal


// Times up modal


// Clear confirmation modal



// ----------------------- Buttons
// Back to main menu buttons
back.addEventListener("click", function () {
   startPexesoGame();
});



// Audio buttons





// ----------------------- Audio
// Audio files




// Volume on/off toggle





// ----------------------- Game start

function startPexesoGame() {
   mainMenuSection.style.display = "flex"; 
   displayGame.style.display = "none";
}


// Create cards in game pexeso according to the selected level
// Hide main menu section and show game arena section
// Set and display points, level, timer, turn counter in their starting values
// Call functions to shuffle cards, start timer and active score system

let selectLevel;
let pairs;

function chooseLevel(playerLevel){
   let cards = "";
   let cardNum = 15;

   if (playerLevel === "easy"){
      selectLevel= "easy";
      cardNum = 7;
      levelGame.innerHTML=selectLevel;
      pairs = 4;
   }else if (playerLevel === "hard"){
      selectLevel = "hard";
      cardNum = 15;
      levelGame.innerHTML=selectLevel;
      pairs = 8;

   }
   let i;
    for (i = 0; i <= cardNum; i++) {
        cards = `${cards}<div class="card" onclick="reverse(${i})" id="c${i}"></div>`;
    }
    console.log(myPexesoCards)
    myPexesoCards.innerHTML = cards;

    mainMenuSection.style.display = "none"; 
    displayGame.style.display = "flex";


    shuffleImages();
   

}



// Shuffle cards before each game
let shuffImg;
function shuffleImages(){
   shuffImg = myCard.slice();
   let cardNum = 12;
   if (gameLevel === "easy") {
      cardNum = 6;
  } else if (gameLevel === "medium") {
      cardNum = 10;
  }

   // for(let i=0;i<shuffImg.length;i++){

   //    let randomNumber = Math.floor(Math.random() * shuffImg.length);


   // }
   let i;
   let j;
   let temp;
   for (i = cardNum; i > 0; i--) {
       j = Math.floor(Math.random() * (i + 1));
       temp = shuffImg[i];
       shuffImg[i] = shuffImg[j];
       shuffImg[j] = temp;
   }
   return shuffImg;

}


// Shuffle function from http://stackoverflow.com/a/245097"
function shuffle(array) {
   let currentIndex = array.length,
       temporaryValue, randomIndex;

   while (currentIndex !== 0) {
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
   }
   return array;
}






// Add figure on the other side of card
// Check if one or two cards reversed
// Check if two cards are the same
// Add lock to prevent reverse more than 2 cards before check
// Update turn counter with every two cards reversed
// Call scoring function to add points when 2 cards match and subtract points when don't

 





// When 2 reversed cards match keep them on board
// Remove lock
// Update pairs variable and if 0 clear time interval
// Play finish audio when all pairs reversed





// When 2 reversed cards do not match restore them
// Remove lock




// Game timer
// Set interval
// Clear interval when times up or quit button hit
// Show times up modal when time = 0




// Score system
// Show game win modal when all pairs match



// Play again when times up





// Save score to local storage
// Show score in highscores modal



// console.log("hallo there is miro");