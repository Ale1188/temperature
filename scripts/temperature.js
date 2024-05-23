function convertTemperature() {
    let celsius = prompt("Enter temperature in Celsius:");
    if (celsius !== null) {
        celsius = parseFloat(celsius);
        if (!isNaN(celsius)) {
            let fahrenheit = (celsius * 9/5) + 32;
            document.getElementById("result").innerText = celsius + "°C is " + fahrenheit + "°F";
        } else {
            document.getElementById("result").innerText = "Please enter a valid number.";
        }
    }
}