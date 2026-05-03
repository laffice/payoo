document.getElementById('cash-out-btn').addEventListener('click', function(){
    const inputAgent = getValueFrominput('input-agentNumber');
    if(inputAgent.length !== 11){
        alert('Please enter a valid 11 digit phone number');
        return
    }


    const inputAmount = getValueFrominput('input-cashoutAmount');
   

    const currentBalance = getBalance();
    const newBalance =  currentBalance - Number(inputAmount);

    if(newBalance < 0){
        alert('Insufficient balance');
        return
    }

    const inputPin = getValueFrominput('cashout-pin');

    if(inputPin === "1234"){
        alert('Cash out successful');
       setBalance(newBalance);
       
       document.getElementById('input-cashoutAmount').value = '';
       document.getElementById('cashout-pin').value = '';
    }
    else{
        alert('Invalid pin');
        return
    }

    // inputAmount.value = '';
    // inputPin.value = '';    
    
})


// cash-out

document.getElementById('add-money-btn').addEventListener('click', function(){
    const selectBank = getValueFrominput('bank-select'); 
    if(selectBank === "Select Bank"){
        alert('Please select a bank');
        return
    }
    
    const accountNumber = getValueFrominput('input-bank-account')
    if( accountNumber.length !== 11){
        alert('Please enter a valid 11 digit bank account number');
        return
    }

    const addAmount = getValueFrominput('input-add-amount');
    if(addAmount <= 0){
        alert('Please enter a valid amount to add');
        return
    }
     
    const addMoneyPin = getValueFrominput('input-add-pin');
    if(addMoneyPin === "1234"){
        alert('Money added successfully');
    
        const newBalance = getBalance() + Number(addAmount);
        setBalance(newBalance);
        document.getElementById('input-bank-account').value = '';
        document.getElementById('input-add-amount').value = '';
        document.getElementById('input-add-pin').value = '';
    }
    else{
        alert('Invalid pin');
        return
    }
})



// transfer money


document.getElementById('transfer-money-btn').addEventListener('click', function(){
    const transAcc = getValueFrominput("input-transAcc"); 
    if(transAcc.length !== 11){
        alert('Please enter a valid 11 digit phone number');
        return
    }
    const transAmount = getValueFrominput("input-trans-amount"); 
    if(transAmount < 200){
        alert('Minimum transfer amount is 200');
        return}

        const transPin = getValueFrominput("input-trans-pin"); 
        if(transPin === "1234"){
            alert('Transfer successful');
            const newBalance = getBalance() - Number(transAmount);
            setBalance(newBalance);
            document.getElementById('input-transAcc').value = '';
            document.getElementById('input-trans-amount').value = '';
            document.getElementById('input-trans-pin').value = '';
        }
        else{
            alert('Invalid pin');
            return
        }       
})


// pay bills

document.getElementById('pay-bills-btn').addEventListener('click', function(){
    const payBank = getValueFrominput('pay-bank-select');
    if(payBank === "Select Bank"){
        alert('Please select a bank');
        return
    }
    const billAcc = getValueFrominput('biller-account');
    if(billAcc.length !== 11){
        alert('Please enter a valid 11 digit biller account number');
        return
    }
    const billAmount = getValueFrominput('input-bill-amount');
    if(billAmount < 100){
        alert('Minimum bill amount is 100');
        return
    }
    const billPin = getValueFrominput('input-bill-pin');
    if(billPin === "1234"){
        alert('Bill payment successful');
        const newBalance = getBalance() - Number(billAmount);
        setBalance(newBalance);
        document.getElementById('biller-account').value = '';
        document.getElementById('input-bill-amount').value = '';
        document.getElementById('input-bill-pin').value = '';
    }
    else{
        alert('Invalid pin');
        return
    }
})