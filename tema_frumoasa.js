function computeLoan(){
    const amount = document.querySelector('#amount').value;
const interest_rate = document.querySelector('#interest_rate').value;
const months = document.querySelector('#months').value;
const interest = (amount * (interest_rate * 0.01)) / months;
let payment = ((amount / months) + interest).toFixed(2); 
document.querySelector('#payment').innerHTML = `Monthly Payment = ${payment}`
}

function depositLoan(){
    const deposit = document.querySelector('#deposit').value;
const interestRate = document.querySelector('#interestRate').value;
const year = document.querySelector('#year').value;
const interest = (deposit * (interestRate * 0.01)) / year;
let payment = ((deposit / year) + interest).toFixed(2); 
document.querySelector('#payment').innerHTML = `Yearly Payment = ${payment}`;
let amount = (deposit + payment).toFixed(value);
document.querySelector('#amount').innerHTML = `Amount Deposit = ${amount}`;
}
