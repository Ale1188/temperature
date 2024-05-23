function convertTemperatureRange(startValue, endValue, scale) {
    scale = scale.toUpperCase();
    let result = '';
    for (let temp = startValue; temp <= endValue; temp++) {
        if (scale === "C") {
            let convertedTemp = (temp * 9/5) + 32;
            result += `${temp}°C is ${convertedTemp.toFixed(2)}°F<br>`;
        } else if (scale === "F") {
            let convertedTemp = (temp - 32) * 5/9;
            result += `${temp}°F is ${convertedTemp.toFixed(2)}°C<br>`;
        } else {
            result = "Invalid scale provided.";
            break;
        }
    }
    document.getElementById("result").innerHTML = result;
}

function promptTemperatureRange() {
    let startValue = parseFloat(prompt("Enter the starting temperature:"));
    if (isNaN(startValue)) {
        alert("Please enter a valid number for the starting temperature.");
        return;
    }

    let endValue = parseFloat(prompt("Enter the ending temperature:"));
    if (isNaN(endValue)) {
        alert("Please enter a valid number for the ending temperature.");
        return;
    }

    let scale = prompt("Enter the scale (C for Celsius, F for Fahrenheit):");
    if (scale !== null) {
        scale = scale.toUpperCase();
        if (scale === "C" || scale === "F") {
            convertTemperatureRange(startValue, endValue, scale);
        } else {
            document.getElementById("result").innerText = "Please enter a valid scale (C or F).";
        }
    }
}