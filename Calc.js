function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
function clearLastDigit() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove the last character
}