let expense = [];
let income = [];
let totalincome = 0;
let totalexpense = 0;
let totalamount = 0;

const incomeCurrency = document.getElementById("incomeCurrency");
// const addIncome = document.getElementById("addIncome");
// const addExpense = document.getElementById("addExpense");
const incomeDescription = document.getElementById("incomeDescription");
const expenseDescription = document.getElementById("expenseDescription");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const expenseCurrency = document.getElementById("expenseCurrency");
const incomeAmount= document.getElementById("incomeAmount");

function addIncomeValue() {

    const description = document.getElementById('incomeDescription').value;
    const amount = document.getElementById('incomeAmount').value;
    const currency = document.getElementById('incomeCurrency').value;
    
    if (description === '' || amount === '' || currency === '') 
    {
        alert('Please fill in all fields');
        return;
    }

     // Here you can handle the addition of income data, like sending it to a server or storing it locally
     console.log('Income Description:', description);
     console.log('Income Amount:', amount);
     console.log('Currency:', currency);
     document.getElementById('incomePopup').style.display = 'none';

    income.push(incomeAmount.value);
    console.log(income);  
}

  function addExpense() 
  {
    var description = document.getElementById('expenseDescription').value;
    var amount = document.getElementById('expenseAmount').value;
    var category = document.getElementById('expenseCategory').value;
    var currency = document.getElementById('expenseCurrency').value;
    
    if (description === '' || amount === '' || category === '' || currency === '') {
      alert('Please fill in all fields');
      return;
    }
    
    // Here you can handle the addition of expense data, like sending it to a server or storing it locally
    console.log('Expense Description:', description);
    console.log('Expense Amount:', amount);
    console.log('Category:', category);
    console.log('Currency:', currency);
    document.getElementById('expensePopup').style.display = 'none';

    expense.push(expenseAmount.value);
    console.log(expense); 
}

  document.getElementById('addIncome').addEventListener('click', function() {
    document.getElementById('incomePopup').style.display = 'block';
  });

  document.getElementById('addExpense').addEventListener('click', function() {
    document.getElementById('expensePopup').style.display = 'block';
  });

  function closePopup(id) {
    document.getElementById(id).style.display = 'none';
  }

  function resetForm(id) {
    document.getElementById(id).querySelectorAll('input[type=text], input[type=number], select').forEach((element) => {
      element.value = '';
    });
  }