let heartCount = 0;
let copyCount = 0;
let coins = 100;

const heartDisplay = document.getElementById('heart-count');
const copyDisplay = document.getElementById('copy-count');
const coinDisplay = document.getElementById('coin-count');
const historyList = document.getElementById('history-list');
const clearHistoryBtn = document.getElementById('clear-history');

//  Heart icon click 
const heartIcons = document.getElementsByClassName('heart-icon');
for (let icon of heartIcons) {
    icon.addEventListener('click', function () {
        heartCount++;
        heartDisplay.innerText = heartCount;
    });
}

// Copy button click 
const copyButtons = document.getElementsByClassName('copy-btn');
for (let btn of copyButtons) {
    btn.addEventListener('click', function () {
        const number = btn.closest('.card').querySelector('.service-number').innerText;
        navigator.clipboard.writeText(number);
        alert(`Copied ${number} to clipboard`);
        copyCount++;
        copyDisplay.innerText = copyCount;
    });
}
