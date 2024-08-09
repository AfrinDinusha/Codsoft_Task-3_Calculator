let darkMode = false;

function DarkMode() {
    darkMode = !darkMode;
    const body = document.body;
    const calculator = document.querySelector('.calculator');

    if (darkMode) {
        body.style.backgroundColor = '#333'; // Dark mode background color
        body.style.color = '#fff'; // Dark mode text color
        calculator.style.backgroundColor = '#555'; // Dark mode calculator background color
    } else {
        body.style.backgroundColor = '#f0f0f0'; // Light mode background color
        body.style.color = '#333'; // Light mode text color
        calculator.style.backgroundColor = '#fff'; // Light mode calculator background color
    }
}

function appendValue(value) {
    document.getElementById('output').value += value;
}

function clearOutput() {
    document.getElementById('output').value = '';
}

function calculate() {
    const expression = document.getElementById('output').value;
    if (expression) {
        try {
            const result = eval(expression); // Using eval for simplicity (not recommended for production)
            document.getElementById('output').value = result;
        } catch (error) {
            document.getElementById('output').value = 'Error';
        }
    }
}
