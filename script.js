document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('nameForm');
    const input = document.getElementById('nameInput');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const birthdayMessage = document.getElementById('birthdayMessage');
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    
    // Function to switch screens with smooth transitions
    function showScreen(hideScreen, showScreen) {
        hideScreen.classList.remove('show');
        hideScreen.style.display = 'none';
        showScreen.style.display = 'flex';
        setTimeout(() => showScreen.classList.add('show'), 10);
    }

    // Handle name input and move to screen 2
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = input.value.trim().toLowerCase();

        // Check if name is empty
        if (!name) {
            alert("Please enter your name!");
            return;
        }

        // Show the birthday screen for "paaru"
        if (name === 'paaru') {
            birthdayMessage.textContent = "Happy Birthday, Paaru!";
            showScreen(screen1, screen2);
        } 
        // Show the maker screen for "srikar"
        else if (name === 'srikar') {
            birthdayMessage.textContent = "You are the maker, Srikar!";
            showScreen(screen1, screen2);
        } 
        // Handle invalid names
        else {
            alert("Surprise not for you!");
        }
    });

    // Go to screen 3 only if the birthday message is shown
    screen2.addEventListener('click', function () {
        if (birthdayMessage.textContent.includes("Happy Birthday")) {
            showScreen(screen2, screen3);
        }
    });

    // Randomize the No button's position on hover (desktop)
    noButton.addEventListener('mouseover', function () {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Randomize the No button's position on touch (mobile)
    noButton.addEventListener('touchstart', function () {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Handle Yes button click
    yesButton.addEventListener('click', function () {
        alert("Yay! Love you too!");
    });
});
