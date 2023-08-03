function clearDisplay() {
    document.getElementById("text1").value = "";
}

function showNumbers(value) {
    document.getElementById("text1").value += value;
}

function calculate() {
    var x = document.getElementById("text1").value;
    var y = eval(x);
    document.getElementById("text1").value = y;
}


