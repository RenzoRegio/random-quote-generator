/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * The 'quotes' array contains objects that has a minimum of 3 (quote, source, category) and a maximum of 5 keys (minimum keys + citation and year)
 ***/

const quotes = [
  {
    quote: "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
    source: "Walt Disney",
    category: "Motivational",
  },
  {
    quote:
      "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
    source: "Winston Churchill",
    category: "Wisdom",
  },
  {
    quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
    source: "Will Rogers",
    category: "Motivational",
  },
  {
    quote:
      "The people who are crazy enough to think they can change the world are the ones who do.",
    source: "Steve Jobs",
    category: "Motivational",
  },
  {
    quote: "It matters not what someone is born, but what they grow to be.",
    source: "J.K. Rowling",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000,
    category: "Wisdom",
  },
  {
    quote:
      "Just because someone stumbles and loses their path, doesn’t mean they’re lost forever.",
    source: "Professor X",
    citation: "X-Men: Days of Future Past",
    year: 2014,
    category: "Motivational",
  },
  {
    quote: "It always seems impossible until its done.",
    source: "Nelson Mandela",
    category: "Motivational",
  },
  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    source: "Buddha",
    category: "Life",
  },
  {
    quote:
      "A real friend is one who walks in when the rest of the world walks out.",
    source: "Walter Winchell",
    category: "Friendship",
  },
];

/***
 * Returns a random quote object from the quotes array.
 * @returns {object} Random Quote Object is generated through the random number value returned by the genRandomNumber variable.
 ***/

function getRandomQuote(arr) {
  const genRandomNumber = Math.floor(Math.random() * quotes.length);
  return arr[genRandomNumber];
}

/***
 * Retrieves the value of each key in the quotes array and returns each value to index.html to display on the page.
 ***/

function printQuote() {
  let quotation = getRandomQuote(quotes);
  let source = document.querySelector(".source");
  document.querySelector(".quote").innerHTML = `${quotation.quote}`;
  source.innerHTML = `${quotation.source}`;
  if (quotation.citation) {
    source.insertAdjacentHTML(
      "beforeend",
      `<span class="citation">${quotation.citation}</span>`
    );
  }
  if (quotation.year) {
    source.insertAdjacentHTML(
      "beforeend",
      `<span class="year">${quotation.year}</span>`
    );
  }
  if (quotation.category) {
    source.insertAdjacentHTML(
      "beforeend",
      `<span class="category">${quotation.category}</span>`
    );
  }
  changeColor(1, 255); // Executes changeColor() to change the background color of the body every time the printQuote() function is called.
}

/**
 * Changes the background color of the body in the HTML.
 * @param {*} min  - The minimum number value for retrieving the random number value.
 * @param {*} max  - The maximum number value for retrieving the random number value.
 */

function changeColor(min, max) {
  const randomColor = Math.ceil(Math.random() * (max - min));
  document.querySelector(".js-bg-color").style.backgroundColor = `rgb(${
    randomColor * Math.random()
  }, ${randomColor}, ${randomColor * Math.random()})`;
}

printQuote(); // Calling printQuote() to run every time the user reloads the page.
setInterval(printQuote, 15000); // Prints a new code to the page every 15 seconds by calling printQuote() function.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
