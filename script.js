document.getElementById('btn').addEventListener('click', displayMessage);

async function displayMessage() {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);
    const output = document.getElementById('output');

    // Clear previous output
    output.innerHTML = '';

    // Validate inputs
    if (!text || isNaN(delay) || delay < 0) {
        output.innerHTML = 'Please enter valid text and delay.';
        return;
    }

    await delayMessage(delay);
    output.innerHTML = text;
}

function delayMessage(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
