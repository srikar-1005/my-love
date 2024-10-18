document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('nameForm');
    const input = document.getElementById('nameInput');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const birthdayMessage = document.getElementById('birthdayMessage');
    const tapButton = document.getElementById('tapButton');
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');

    // Handle name input and move to screen 2
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = input.value.trim().toLowerCase();
        
        if (name === 'paaru') {
            birthdayMessage.textContent = "Happy Birthday, Paaru!";
        } else if (name === 'srikar') {
            birthdayMessage.textContent = "You are the maker, Srikar!";
        } else {
            birthdayMessage.textContent = `Hello ${name}, you are special!`;
        }

        screen1.style.display = 'none';
        screen2.style.display = 'flex';
    });

    // Move to screen 3 when the second screen button is clicked
    tapButton.addEventListener('click', function () {
        screen2.style.display = 'none';
        screen3.style.display = 'flex';
    });

    // Randomize the No button's position on hover
    noButton.addEventListener('mouseover', function () {
        const parent = noButton.parentElement;
        const maxX = parent.offsetWidth - noButton.offsetWidth;
        const maxY = parent.offsetHeight - noButton.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.position = 'absolute';  // Make sure the button is positioned absolutely
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Handle Yes button click
    yesButton.addEventListener('click', function () {
        alert("Yay! Love you too!");
    });
});
