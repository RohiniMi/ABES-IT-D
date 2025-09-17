let isON = false;

function colorHandler(color) {
    const bulb = document.getElementById("bulb");
    if (isON) {
        console.log(color);
        console.log(document.getElementById("bulb"));
        bulb.style.backgroundColor = color;
    }
    else {
        bulb.style.backgroundColor = "gray";
    }
}