// function
function calc(){
    let input1 = parseInt(document.getElementById(`input1`).value);
    let input2 = parseInt(document.getElementById(`input2`).value);
    let operator = document.getElementById(`operator`).value;

    if(operator === '+'){
        document.getElementById(`result`).value = input1+input2;
    }

    if(operator === '-'){
        document.getElementById(`result`).value = input1-input2;
    }

    if(operator === 'x'){
        document.getElementById(`result`).value = input1*input2;
    }

    if(operator === '/'){
        document.getElementById(`result`).value = input1/input2;
    }    
}