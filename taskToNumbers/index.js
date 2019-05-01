function start() {
    
    var startnum1 = document.getElementById("number1").value;
    var startnum2 = parseInt(document.getElementById("number2").value);

    if (startnum2 < 0) {
        alert("-1");
    } else if (startnum1.length < startnum2) {
        alert("0");
    } else {
        alert (startnum1[startnum1.length - startnum2]);
    }
}   