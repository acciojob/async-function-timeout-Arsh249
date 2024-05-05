const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const btn = document.getElementById('btn');

// Async function to display message after a specified delay
async function displayMessage() {
  // Retrieve user-provided text and delay values
  const text = textInput.value;
  const delay = delayInput.value * 1000; // Convert delay to milliseconds

  // Display message after the specified delay
  try {
    outputDiv.textContent = '';
    await new Promise(resolve => setTimeout(resolve, delay)); // Introduce delay
    outputDiv.textContent = text;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Event listener for the button click
btn.addEventListener('click', displayMessage);
