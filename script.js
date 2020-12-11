//Selectors and Vars
let totalExpense;
let incomingCalcButton = document.getElementById('incomingCalcButton');
let outgoingCalcButton = document.getElementById('expenseButton');
let newExpenseName =  document.querySelector("[name=expense_Name]").value;
let newExpenseAmount =  document.querySelector("[name=expense_Value]").value;
let expensesNameSection = document.querySelector('#title_Expenses');
let expensesAmountSection = document.querySelector('#value_Expenses');


//Functions 

function incomingCash() {
    event.preventDefault();
    let incomingInput = document.querySelector("[name=incoming_Cash_Input]").value;
    let expenseInputName = document.querySelector("[name=expense_Name]").value;
    let expenseInputAmount = document.querySelector("[name=expense_Value]").value;
    let balanceBudget = incomingInput - expenses[1]; 
    document.getElementById("budgetIncoming").innerHTML = incomingInput;
    document.getElementById("balanceIncoming").innerHTML = balanceBudget;
}


function addExpense(event) {
    //Prevent submission
    event.preventDefault();
    //Expense Name Div
    const expenseNameDiv = document.createElement('div');
    expenseNameDiv.classList.add('expName');
    //Expense amonut div
    const expenseAmountDiv = document.createElement('div');
    expenseAmountDiv.classList.add('expAmount');
    //Create LI Expense Names
    const newExpName = document.createElement('li');
    newExpName.innerText = newExpenseName.value;
    newExpName.classList.add('expense-name');
    expenseNameDiv.appendChild(newExpName);
    //Create LI Expense Amounts
    const newExpAmt = document.createElement('li');
    newExpAmt.innerText = newExpenseAmount.value;
    newExpAmt.classList.add('expense-amount');
    expenseNameDiv.appendChild(newExpAmt);
    //append to LI
    expensesNameSection.appendChild(expenseNameDiv);
    expensesAmountSection.appendChild(expenseAmountDiv);
    //Clear input
    newExpenseName.value = "";
    newExpenseAmount.value = "";
}

// Event Handlers
incomingCalcButton.addEventListener("click", incomingCash);
expenseButton.addEventListener("click", addExpense);




// working js from before to keep in mind so I can clean up

// function incomingExpenses() {
//     let expenseInputName = document.querySelector("[name=expense_Name]").value;
//     let expenseName = document.querySelector("[name=expense_Name]").value;
//     let expenseInputAmount = document.querySelector("[name=expense_Value]").value;
//     document.getElementById("expenseIncoming").innerHTML = expenseInputAmount;
    
// }

// let expenses = ['',0];


// function incomingExpenses() {
//     expenses[0] = `${expenses[0]} `   + document.querySelector("[name=expense_Name]").value;
//     expenses[1] += parseInt(document.querySelector("[name=expense_Value]").value);

// document.querySelector('#title_Expenses').innerHTML = expenses[0];
// document.querySelector('#value_Expenses').innerHTML = expenses[1];
// }


//const addExpense = (event) => {
    // event.preventDefault();
    // let expense =[{
    //     name: document.querySelector("[name=expense_Name]").value,
    //     amount: document.querySelector("[name=expense_Value]").value
    // }]
    // expensesNew.push(expense[name]);
    
    // console.warn('added', {expensesNew});

    //document.querySelector('#title_Expenses').innerHTML = expensesNew[i].name;
    //document.querySelector('#value_Expenses').innerHTML = expensesNew[amount];
    //let message = `You've just added ${expensesNew[name]} for .`;
    // console.log(message);
//}