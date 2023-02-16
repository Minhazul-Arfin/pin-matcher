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


// ---------------PIN GENERATION PART------------------
document.getElementById('btn-pin-generate').addEventListener('click', function(){
    console.log("button clicked")
    const pin = generatePin();
    const showPin =  document.getElementById('show-pin');
    showPin.value = pin;
})


// ---------------USER INPUT PART------------------
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
});

// ---------------VERIFY PIN------------------
document.getElementById('btn-submit').addEventListener('click', function(){
    //CATCHING GENERATED PIN
    const generatedPinField = document.getElementById('show-pin');
    const generatedPin = generatedPinField.value;

    //CATCHING USER INPUT
    const userInputField = document.getElementById('user-input');
    const userInputPin = userInputField.value;

    // CATCHING SUCCESS AND FAILURE MESSAGE ELEMENTS
    const successMsg = document.getElementById('success-msg');
    const failureMsg = document.getElementById('failure-msg');

    console.log(userInputPin);
    console.log(generatedPin);

    // VARIFY PIN
    if(userInputPin === generatedPin){
        console.log("yes");
        successMsg.style.display = 'block';
        failureMsg.style.display = 'none';
        userInputField.value = "";
        generatedPinField.value = "";
    }
    else{
        console.log("no");
        failureMsg.style.display = 'block';
        successMsg.style.display = 'none';
        userInputField.value = "";
        generatedPinField.value = "";
    }
})

