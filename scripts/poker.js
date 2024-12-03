import {shuffleDeck, getCardValue, getCardSuit, dealDeck, drawCard} from './deck.js';

//Initializing Variables
let deck = ['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', '11C', '12C', '13C', 
            '1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', '11D', '12D', '13D', 
            '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H', 
            '1S', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', '11S', '12S', '13S'];
let playerHands = [];
let communityCards = [];
let gameOver = false;
let phaseNum = 1;
let betButton = document.getElementById('bet-button');
let callButton = document.getElementById('call-button');
let foldButton = document.getElementById('fold-button');
let nextPhaseButton = document.getElementById('next-phase-button');
let nextHandButton = document.getElementById('next-hand-button');

//Adding Click Events
document.getElementById('bet-button').addEventListener('click', bet);
document.getElementById('call-button').addEventListener('click', call);
document.getElementById('fold-button').addEventListener('click', fold);
document.getElementById('next-phase-button').addEventListener('click', nextPhase);
document.getElementById('next-hand-button').addEventListener('click', nextHand);
nextPhaseButton.classList.add('inactive');
nextHandButton.classList.add('inactive');

function dealHands(deck, playerHands) {
  shuffleDeck(deck);
  dealDeck(deck, playerHands, 2, 2);
}

function displayHands(playerHands) {
  const playerHandElement = document.getElementById('player-cards');
  const dealerHandElement = document.getElementById('dealer-cards');
  const pokerHandElement = document.getElementById('poker-cards');
  
  // Clear current displayed hands
  playerHandElement.innerHTML = '';
  dealerHandElement.innerHTML = '';
  pokerHandElement.innerHTML = '';
  
  // Display player/dealer hands
    for(let i = 0; i < playerHands.length; i++) {
      for(let j = 0; j < playerHands[0].length; j++) {
        let isFaceDown = false;
        if(i > 0 && !gameOver) {
          isFaceDown = true;
          const cardElement = createCardElement(playerHands[i][j], isFaceDown); 
          dealerHandElement.appendChild(cardElement);
        } else if (i > 0 && gameOver) {
          const cardElement = createCardElement(playerHands[i][j], isFaceDown); 
          dealerHandElement.appendChild(cardElement);
        } else 
        {
          const cardElement = createCardElement(playerHands[i][j], isFaceDown); 
          playerHandElement.appendChild(cardElement);
        }
      }
    }
  // Display Community Card Hand (Flop, Turn, River) 
    for(let i = 0; i < communityCards.length; i++) {
      const cardElement = createCardElement(communityCards[i], false);
      pokerHandElement.appendChild(cardElement);
    }

  }
  
  //Function to show card image
  function createCardElement(card, isFaceDown = false) {
    const cardImg = document.createElement('img');
    const cardValue = getCardValue(card); // Retrieve card value (e.g., '1')
    const cardSuit = getCardSuit(card); // Retrieve full suit name (e.g., 'spades')
  
    // Map suit initials to their full names
    const suitMap = {
      C: 'clubs',
      D: 'diamonds',
      H: 'hearts',
      S: 'spades'
    };
  
    // Get the first letter of the suit in uppercase
    const suitInitial = cardSuit[0].toUpperCase();
  
    // Adjust the path based on the actual file structure
    let cardImgSrc = isFaceDown
    ? '../images/cards/cardbacks.png'
    : `../images/cards/${suitMap[suitInitial]}/${cardValue}${suitInitial}.png`;
  
    // Set the image source and alt text
    cardImg.src = cardImgSrc;
    cardImg.alt = isFaceDown ? 'Card Back' : `${cardValue} of ${cardSuit}`;
    cardImg.className = 'card-image';
  
    return cardImg;
  }

  /* Poker specific methods, bet, call, fold, nextPhase, nextHand, calculateScore.
    All methods will set buttons to inactive at the correct phases of the game.
    nextPhase will check which phase it is and play amount of cards accordingly.
    nextHand will put the deck all 52 cards together and all hands are empty.
    calculate score will look for certain patterns to see who wins. */
    

  //WIP
  function bet() {
    nextPhaseButton.classList.remove('inactive');
  }

  //WIP
  function call() {
    nextPhaseButton.classList.remove('inactive');
  }

  
  function fold() {
    gameOver = true;
    displayHands(playerHands);
    betButton.classList.add("inactive");
    callButton.classList.add("inactive");
    foldButton.classList.add("inactive");
    nextHandButton.classList.remove("inactive");
  }
  
  function nextPhase() {
    if(!gameOver && phaseNum == 1) {
      for(let i = 0; i < 3; i++) {
        let card = drawCard(deck);
        communityCards.push(card);
        displayHands(playerHands);
        nextPhaseButton.classList.add('inactive');
      }
      phaseNum++;
    } else if(!gameOver && phaseNum == 2) {
      let card = drawCard(deck);
        communityCards.push(card);
        displayHands(playerHands);
        phaseNum++;
        nextPhaseButton.classList.add('inactive');
    } else if(!gameOver && phaseNum == 3) {
      let card = drawCard(deck);
        communityCards.push(card);
        displayHands(playerHands);
        phaseNum++;
        betButton.classList.add("inactive");
        callButton.classList.add("inactive");
        foldButton.classList.add("inactive");
        nextPhaseButton.classList.add('inactive');
        nextHandButton.classList.remove('inactive');
        gameOver = true;
        calculateScore();
     } 
  }

  function nextHand() {
    if(gameOver) {
      for(let i = 0; i < playerHands.length; i++) {
        for(let j = 0; j < playerHands[0].length; j++) {
          deck.push(playerHands[i][j]);
        }
      }
      for (let i = 0; i < communityCards.length; i++) {
        deck.push(communityCards[i]);
      }
      gameOver = false;
      phaseNum = 1;
      playerHands=[];
      communityCards=[];
      shuffleDeck(deck);
      dealHands(deck, playerHands);
      displayHands(playerHands);
      betButton.classList.remove("inactive");
      callButton.classList.remove("inactive");
      foldButton.classList.remove("inactive");
      nextPhaseButton.classList.add("inactive");
      nextHandButton.classList.add("inactive");
    }
  }
  
  //WIP
  function calculateScore() {
    
  }

  dealHands(deck, playerHands);
  displayHands(playerHands);