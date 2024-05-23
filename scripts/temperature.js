function convertTemperature(temperature, scale) {
    let convertedTemp;
    if (scale === "C") {
        convertedTemp = (temperature * 9/5) + 32;
        return `${temperature}°C is ${convertedTemp.toFixed(2)}°F`;
    } else if (scale === "F") {
        convertedTemp = (temperature - 32) * 5/9;
        return `${temperature}°F is ${convertedTemp.toFixed(2)}°C`;
    } else {
        return "Invalid scale provided.";
    }
}

function promptTemperature() {
    let temperature = prompt("Enter the temperature:");
    if (temperature !== null) {
        temperature = parseFloat(temperature);
        if (!isNaN(temperature)) {
            let scale = prompt("Enter the scale (C for Celsius, F for Fahrenheit):");
            if (scale !== null) {
                scale = scale.toUpperCase();
                if (scale === "C" || scale === "F") {
                    let result = convertTemperature(temperature, scale);
                    document.getElementById("result").innerText = result;
                } else {
                    document.getElementById("result").innerText = "Please enter a valid scale (C or F).";
                }
            }
        } else {
            document.getElementById("result").innerText = "Please enter a valid number for temperature.";
        }
    }
}