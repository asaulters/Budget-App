//Selectors and Vars
let totalExpense;
let expensesNew = [];
let incomingCalcButton = document.getElementById('incomingCalcButton');
let outgoingCalcButton = document.getElementById('expenseButton');

//Functions 

function incomingCash(ev) {
    event.preventDefault();
    let incomingInput = document.querySelector("[name=incoming_Cash_Input]").value;
    let expenseInputName = document.querySelector("[name=expense_Name]").value;
    let expenseInputAmount = document.querySelector("[name=expense_Value]").value;
    let balanceBudget = incomingInput - expenses[1]; 
    document.getElementById("budgetIncoming").innerHTML = incomingInput;
    document.getElementById("balanceIncoming").innerHTML = balanceBudget;
}


const addExpense = (ev) => {
    event.preventDefault();
    let expense =[{
        name: document.querySelector("[name=expense_Name]").value,
        amount: document.querySelector("[name=expense_Value]").value
    }]
    expensesNew.push(expense[name]);
    
    for (let i = 0; i < expensesNew.length; i++){
        console.log(expensesNew[0]);
        console.log(expense.name);
        console.log(expense.amount);
        document.querySelector('#title_Expenses').innerHTML = expensesNew.name;
        document.querySelector('#value_Expenses').innerHTML = expensesNew[amount];
        let message = `You've just added ${expensesNew[name]} for .`;
        console.log(message);
    }
    console.warn('added', {expensesNew});

    //document.querySelector('#title_Expenses').innerHTML = expensesNew[i].name;
    //document.querySelector('#value_Expenses').innerHTML = expensesNew[amount];
    //let message = `You've just added ${expensesNew[name]} for .`;
    // console.log(message);
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


