function generatePin(){
    const pin = Math.round(Math.random()*10000);
    const stringPin = pin + "";

    if(stringPin.length === 4){
        return stringPin;
    }
    else{
        console.log("invalid");
        return generatePin();
    }
}



document.getElementById('btn-pin-generate').addEventListener('click', function(){
    console.log("button clicked")
    const pin = generatePin();
    const showPin =  document.getElementById('show-pin');
    showPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    // CATCHING THE NUMBERS TYPED FROM CALCULATOR BUTTONS
    const number = event.target.innerText;
    console.log(number);

    // GET PREVIOUS VALUE AND UPDATE IT
    const typedNumberField = document.getElementById('user-input');
    const previousTypedNumber = typedNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
    
})