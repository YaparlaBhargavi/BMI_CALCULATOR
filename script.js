// Get references to the HTML elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculate-btn');
const bmiValueDisplay = document.getElementById('bmi-value');
const bmiStatusDisplay = document.getElementById('bmi-status');

// Add an event listener to the button
calculateBtn.addEventListener('click', calculateBMI);

function calculateBMI() {
    // 1. Get the values from the input fields and convert them to numbers
    const weight = parseFloat(weightInput.value);
    const heightCm = parseFloat(heightInput.value); // Height in centimeters

    // Basic input validation
    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        alert("Please enter valid positive numbers for both weight and height.");
        // Clear the results display
        bmiValueDisplay.textContent = '--';
        bmiStatusDisplay.textContent = 'Invalid Input';
        bmiStatusDisplay.style.color = 'red';
        return; 
    }

    // 2. Convert height from cm to meters (m)
    const heightM = heightCm / 100; 

    // 3. Calculate BMI using the formula: weight (kg) / [height (m)]²
    const bmi = weight / (heightM * heightM);

    // 4. Format the BMI value to one decimal place
    const formattedBMI = bmi.toFixed(1);

    // 5. Determine the status based on the calculated BMI
    let statusText = '';
    let statusColor = '';

    if (bmi < 18.5) {
        statusText = 'Underweight';
        statusColor = '#ffc107'; // Yellow
    } else if (bmi >= 18.5 && bmi < 25) {
        statusText = 'Normal Weight';
        statusColor = '#28a745'; // Green
    } else if (bmi >= 25 && bmi < 30) {
        statusText = 'Overweight';
        statusColor = '#fd7e14'; // Orange
    } else {
        statusText = 'Obese';
        statusColor = '#dc3545'; // Red
    }

    // 6. Update the HTML to display the results
    bmiValueDisplay.textContent = formattedBMI;
    bmiStatusDisplay.textContent = statusText;
    bmiStatusDisplay.style.color = statusColor;
}
