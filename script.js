document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('calculator-display');
    const buttons = document.querySelectorAll('.dd span');
    let displayData = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value'); 

            if (value === 'C') {
                displayData = '';
                display.value = '';
            } else if (value === '=') {
                try {
                    displayData = eval(displayData);
                    display.value = displayData;
                } catch (error) {
                    display.value = 'Error';
                    displayData = ''; 
                }
            } else {
                displayData += value;
                display.value = displayData;
            }
        });
    });
});
