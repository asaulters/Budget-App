let expenseNames;
let totalExpense;

function incomingCash() {
    let incomingInput = document.querySelector("[name=incoming_Cash_Input]").value;
    let expenseInputName = document.querySelector("[name=expense_Name]").value;
    let expenseInputAmount = document.querySelector("[name=expense_Value]").value;
    document.getElementById("budgetIncoming").innerHTML = incomingInput;
    
}

function incomingExpenses() {
    let expenseInputName = document.querySelector("[name=expense_Name]").value;
    let expenseName = document.querySelector("[name=expense_Name]").value;
    let expenseInputAmount = document.querySelector("[name=expense_Value]").value;
    document.getElementById("expenseIncoming").innerHTML = expenseInputAmount;
    
}

function balanceBudget() {
    let balanceTotal = incomingInput.value - totalExpense;
    document.getElementById("balanceIncoming").innerHTML = balanceTotal;
}

let incomingCalcButton = document.getElementById('incomingCalcButton');
incomingCalcButton.addEventListener("click", incomingCash);

let outgoingCalcButton = document.getElementById('expenseButton');
expenseButton.addEventListener("click", incomingExpenses);