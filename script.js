// Function to validate name input on the first page
function validateName() {
    const name = document.getElementById('userName').value.toLowerCase();
    const errorMessage = document.getElementById('errorMessage');

    if (name === 'paaru') {
        goToPage2(); // Transition to page 2 if 'paaru' is entered
    } else if (name === 'srikar') {
        errorMessage.innerText = 'The maker of the website';
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.innerText = 'Surprise is not for you';
        errorMessage.classList.remove('hidden');
    }
}

// Function to go to the second page
function goToPage2() {
    const name = document.getElementById('userName').value;
    document.getElementById('displayName').innerText = `Happy Birthday ${name}!`;
    document.getElementById('page1').classList.add('hidden'); // Hide the first page
    document.getElementById('page2').classList.remove('hidden'); // Show the second page
    generateBalloons();
}

// Function to go to the third page and play music
function goToPage3() {
    document.getElementById('page2').classList.add('hidden'); // Hide the second page
    document.getElementById('page3').classList.remove('hidden'); // Show the third page

    // Create and configure audio element for background music
    const audio = new Audio("srikarmylove.mp3"); // Update with the actual path to your audio file
    audio.loop = true; // Make the audio loop

    // Attempt to play the audio
    audio.play().catch(error => console.log("Autoplay blocked:", error));
}

// Function to generate random balloons for the animated background on the second page
function generateBalloons() {
    const container = document.getElementById('balloon-container');
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.setProperty('--randomX', Math.random()); // Random horizontal position for balloons
        container.appendChild(balloon);
    }
}

// Function to handle 'Yes' and 'No' buttons on the third page
function handleAnswer(answer) {
    if (answer === 'yes') {
        alert('Yay! I love you too!');
        setTimeout(() => {
            document.getElementById('page3').classList.add('hidden');
            document.getElementById('page4').classList.remove('hidden');
        }, 1000);
    } else {
        randomizeNoButton();
    }
}

function randomizeNoButton() {
    const noButton = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * 300) + 'px';
    const randomY = Math.floor(Math.random() * 300) + 'px';
    noButton.style.position = 'absolute';
    noButton.style.top = randomY;
    noButton.style.left = randomX;
}
