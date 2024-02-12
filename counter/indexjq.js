const DEFAULT = 0;
let counter = DEFAULT;

$(document).ready(function(){
    const btnDecr = $("#btnDecr");
    const btnReset = $("#btnReset");
    const btnIncr = $("#btnIncr");

    btnDecr.on("click", () => onDecreaseClicked());
    btnReset.on("click", () => onResetClicked());
    btnIncr.on("click", () => onIncreaseClicked());
})

function onDecreaseClicked() {
    decreaseCounter();
}

function onResetClicked() {
    resetCounter();
}

function onIncreaseClicked() {
    increaseCounter();
}

function decreaseCounter() {
    counter--;
    showCounter();
}

function resetCounter() {
    counter = DEFAULT;
    showCounter();
}

function increaseCounter() {
    counter++;
    showCounter();
}

function showCounter() {
    const counterDOM = $("#counter");
    counterDOM.html(counter);
    styleCounter(counterDOM);
}

function styleCounter(counterDOM) {
    counterDOM.toggleClass("color-green", counter > 0);
    counterDOM.toggleClass("color-black", counter === 0);
    counterDOM.toggleClass("color-red", counter < 0);
}