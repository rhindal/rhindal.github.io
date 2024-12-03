// Import .js
import { printDeck, printDeckValues, getCardValue, getCardSuit, shuffleDeck, dealDeck, createDeck} from './deck.js';
//import { calculateScore, drawCard } from './blackjack.js';

let playerHands = [];
let deck = ['1C', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', '11C', '12C', '13C',
        '1D', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', '11D', '12D', '13D',
        '1H', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', '11H', '12H', '13H',
        '1S', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', '11S', '12S', '13S']
printDeck(deck);
printDeckValues(deck);
console.log(getCardValue('3S'));
console.log(getCardSuit('3S'));
console.log(shuffleDeck(deck));
dealDeck(deck, playerHands, 3, 3);
console.log(deck);
console.log(playerHands);

// //Test for Blackjack
// const hand1 = ["A", "K"];
// const hand2 = ["A", "K", "5"];
// const hand3 = ["2", "3", "6"];
// const hand4 = ["A", "A", "K"];
// const hand5 = ["A", "A", "A"];
// const hand6 = ["J", "Q", "K"];

// // Test createDeck
// function testCreateDeck() {
//   const deck = createDeck();
//   console.log("Test createDeck: ", deck.length === 52 ? "PASS" : "FAIL");
// }

// // Test shuffleDeck
// function testShuffleDeck() {
//   const deck = createDeck();
//   const originalDeck = [...deck];

//   // Check if deck is shuffled
//   const isShuffled = deck.some((card, index) => card !== originalDeck[index]);
//   console.log("Test shuffleDeck: ", isShuffled ? "PASS" : "FAIL");
// }

// function testCalculateScore() {
//         const hand1 = [{ value: "A" }, { value: "K" }];
//         console.log("Test calculateScore hand1: ", calculateScore(hand1) === 21 ? "PASS" : "FAIL");
        
//         const hand2 = [{ value: "A" }, { value: "K" }, { value: "5" }];
//         console.log("Test calculateScore hand2: ", calculateScore(hand2) === 16 ? "PASS" : "FAIL");
      
//         const hand3 = [{ value: "2" }, { value: "3" }, { value: "6" }];
//         console.log( "Test calculateScore hand3: ", calculateScore(hand3) === 11 ? "PASS" : "FAIL");
      
//         const hand4 = [{ value: "A" }, { value: "A" }, { value: "K" }];
//         console.log("Test calculateScore hand4: ", calculateScore(hand4) === 12 ? "PASS" : "FAIL");
      
//         const hand5 = [{ value: "A" }, { value: "A" }, { value: "A" }];
//         console.log("Test calculateScore hand5: ", calculateScore(hand5) === 13 ? "PASS" : "FAIL"); 
//         // Test with 3 Aces, expected to count as 1, 1, 11

//         const hand6 = [{ value: "J" }, { value: "Q" }, { value: "K" }];
//         console.log( "Test calculateScore hand6: ", calculateScore(hand6) === 30 ? "PASS" : "FAIL");
//         // Test with all face cards, should total 30
//       }

// function testDrawCard() {
//   let deck = createDeck();
//   const cardBeforeDraw = deck.length;
  
//   // Draw a card
//   const card = drawCard(deck);
//   const cardAfterDraw = deck.length;

//   console.log("Deck before drawing a card:", cardBeforeDraw);
//   console.log("Deck after drawing a card:", cardAfterDraw);
//   console.log("Card drawn:", card);

//   // Deck length reduced by 1, and a card is drawn
//   if (cardAfterDraw === cardBeforeDraw - 1 && card) {
//     console.log("Test drawCard: PASS");
//   } else {
//     console.log("Test drawCard: FAIL");
//   }
// }

// // Run all tests
// function runTests() {
//   console.log("Running Tests for Blackjack...");
//   testCreateDeck();
//   testShuffleDeck();
//   testCalculateScore();
//   testDrawCard();
// }

//runTests();