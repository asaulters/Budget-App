// function incomingExpenses() {
//     let expenseInputName = document.querySelector("[name=expense_Name]").value;
//     let expenseName = document.querySelector("[name=expense_Name]").value;
//     let expenseInputAmount = document.querySelector("[name=expense_Value]").value;
//     document.getElementById("expenseIncoming").innerHTML = expenseInputAmount;
    
// }

// let expenses = ['',0];
let totalExpense;

function incomingCash() {
    let incomingInput = document.querySelector("[name=incoming_Cash_Input]").value;
    let expenseInputName = document.querySelector("[name=expense_Name]").value;
    let expenseInputAmount = document.querySelector("[name=expense_Value]").value;
    let balanceBudget = incomingInput - expenses[1]; 
    document.getElementById("budgetIncoming").innerHTML = incomingInput;
    document.getElementById("balanceIncoming").innerHTML = balanceBudget;
}

// function incomingExpenses() {
//     expenses[0] = `${expenses[0]} `   + document.querySelector("[name=expense_Name]").value;
//     expenses[1] += parseInt(document.querySelector("[name=expense_Value]").value);

// document.querySelector('#title_Expenses').innerHTML = expenses[0];
// document.querySelector('#value_Expenses').innerHTML = expenses[1];
// }

let expensesNew = [];

const addExpense = (ev) => {
    let expense =[{
        name: document.querySelector("[name=expense_Name]").value,
        amount: parseInt(document.querySelector("[name=expense_Value]").value)
    }]
    expensesNew.push(expense);
    
    for (let i = 0; i < expensesNew.length; i++){
        console.log(expensesNew);
        
    }
    console.warn('added', {expensesNew});

    document.querySelector('#title_Expenses').innerHTML = expensesNew.name;
    document.querySelector('#value_Expenses').innerHTML = expensesNew.amount;
    let message = `You've just added ${expensesNew[name]} for ${expensesNew[amount]}.`;
    console.log(message);
}
// function balanceBudget() {
//     let balanceTotal = incomingInput.value - totalExpense;
//     document.getElementById("enterExpenses").innerHTML = balanceTotal;
// }

let incomingCalcButton = document.getElementById('incomingCalcButton');
incomingCalcButton.addEventListener("click", incomingCash);

let outgoingCalcButton = document.getElementById('expenseButton');
expenseButton.addEventListener("click", addExpense);