document.addEventListener('DOMContentLoaded', function () {
    const counterDisplay = document.querySelector('.counter-container h1');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');
    const incrementBtn = document.getElementById('incrementBtn');

    let count = 0;
    function updateCounter() {
        counterDisplay.textContent = count;
    }
    decrementBtn.addEventListener('click', function () {
        count--;
        updateCounter();
    });
    resetBtn.addEventListener('click', function () {
        count = 0;
        updateCounter();
    });
    incrementBtn.addEventListener('click', function () {
        count++;
        updateCounter();
    });
});