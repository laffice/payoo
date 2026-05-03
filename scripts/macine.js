// console.log('machine js file is connected')

function showOnly(id){
    
    const addMoney= document.getElementById('add-money');
    const cashOut= document.getElementById('cash-out');
    const transferMoney= document.getElementById('transfer-money');
    const payBills= document.getElementById('pay-bills');
    const getBonus= document.getElementById('get-bonus');
    const transactions= document.getElementById('transactions');
    const latestTrans= document.getElementById('latest-trans');

    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    transferMoney.classList.add('hidden');
    payBills.classList.add('hidden');
    getBonus.classList.add('hidden');
    latestTrans.classList.add('hidden');

    const selected= document.getElementById(id);
    selected.classList.remove('hidden');
}

// machine

function getValueFrominput (id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(value);
    return value;   
}


// balance 

function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText ;
    return Number(balance);
}

function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText= value; 
}