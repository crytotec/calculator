document.addEventListener("DOMContentLoaded", function () {
    const calculator = document.getElementById('calculator-display');
    const buttons = document.querySelectorAll('.dd span'); 

    let display='';
    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            const value= button.getAttribute('data-value');
            if (value === 'C') {
              display='';   
            }else if (value === '=') {
                try {
                    display=eval(display); 
                } catch (error) {
                    display ='Error';
                }
            }else{
                display+=value;
            }
            calculator.value=display;
        })
    });
})    