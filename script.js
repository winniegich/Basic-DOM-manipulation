// State Variable
let count = 0;

// DOM Elements
const countDisplay = document.getElementById('count-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

/**
 * Updates the DOM elements to reflect current state
 */
function updateDOM() {
  countDisplay.textContent = count;
  
  // Prevent decrementing below zero by disabling button
  decrementBtn.disabled = (count <= 0);
}

/**
 * Event Listener Callbacks
 */
function handleIncrement() {
  count++;
  updateDOM();
}

function handleDecrement() {
  if (count > 0) {
    count--;
    updateDOM();
  }
}

function handleReset() {
  count = 0;
  updateDOM();
}

// Attach Event Listeners
incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);
resetBtn.addEventListener('click', handleReset);

// Initial UI sync
updateDOM();