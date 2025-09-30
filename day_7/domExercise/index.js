const button = document.getElementById("button");
let isON = false;
const bulb = document.getElementById("bulb");

function colorHandler(color) {
    if (isON) {
        console.log(color);
        console.log(document.getElementById("bulb"));
        bulb.style.backgroundColor = color;
    }
}
function onOFFHandler(onOrOff) {
    if (onOrOff === "ON") {
        isON = true;
        button.value = "OFF";
        bulb.style.backgroundColor = "gray";
    } else {
        isON = false;
        button.value = "ON";
    }

}