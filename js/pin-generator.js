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
    
    console.log(generatePin())

})