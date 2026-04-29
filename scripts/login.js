document.getElementById('login').addEventListener('click', function(){
const inputNumber = document.getElementById('input-number'); 
const number = inputNumber.value ; 
// console.log(number)
const inputPin = document.getElementById('input-pin'); 
const pin = inputPin.value ; 
// console.log(number, pin); 
if(number === "01234567890" && pin ==="1234"){

    alert('login success')
}
else{
    alert('login failed')
    return
}
})
