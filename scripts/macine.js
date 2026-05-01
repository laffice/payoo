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