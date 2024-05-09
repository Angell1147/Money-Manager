let expense = [];
let income = [];
let totalincome = 0;
let totalexpense = 0;
let totalamount = 0;


//======================= Dialog for income/expense ====================== //
const dialog = document.getElementById("plusPopup")

function showDialog()
{
    dialog.showModal()
}
function closeDialog()
{
    dialog.close()
}


const displayIncome = document.getElementById("outputIncome");
const displayExpense = document.getElementById("ouputExpense");
const displayTotal = document.getElementById("outputTotal");
















const incomeCurrency = document.getElementById("incomeCurrency");
// const addIncome = document.getElementById("addIncome");
// const addExpense = document.getElementById("addExpense");
const incomeDescription = document.getElementById("incomeDescription");
const expenseDescription = document.getElementById("expenseDescription");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const expenseCurrency = document.getElementById("expenseCurrency");
const incomeAmount= document.getElementById("incomeAmount");
const date = document.getElementById("date")

function addIncomeValue() {

    const description = document.getElementById('incomeDescription').value;
    const amount = document.getElementById('incomeAmount').value;
    const currency = document.getElementById('incomeCurrency').value;
    
    if (description === '' || amount === '' || currency === '') 
    {
        alert('Please fill in all fields');
        return;
    }

    if (amount <= 0)
      {
        alert('input invalid');
        return;
      }

     // Here you can handle the addition of income data, like sending it to a server or storing it locally
     console.log('Income Description:', description);
     console.log('Income Amount:', amount);
     console.log('Currency:', currency);
     document.getElementById('incomePopup').style.display = 'none';


//======== calculation of total income =============

    income.push(incomeAmount.value);
    income = income.map(Number);
    console.log(income);

    totalincome = 0;
    for (let i = 0; i < income.length; i++) 
    {
      totalincome = totalincome + income[i];
    }

  // Output the income
  console.log("The sum of income is:", totalincome);

  //=========== calculation of savings ============

totalamount = totalincome - totalexpense ;
console.log("savings ", totalamount);

update(totalincome, totalexpense, totalamount );



}

function update(totalincome, totalexpense, totalamount )
{
    displayIncome.innerHTML = `₹${totalincome}`;
    displayExpense.innerHTML = `₹${totalexpense}`;
    displayTotal.innerHTML = `₹${totalamount}`;
}

   // Function to add new item
   function addItem(date, expenseCategory, expenseAmount, expenseDescription) {
    const itemList = document.getElementById("itemsList");
    
    // Create div element for new item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("list-item");
    
    // Fill div with item details
    itemDiv.innerHTML = `
        <p>Date: ${date}</p>
        <p>Category: ${expenseCategory}</p>
        <p>Amount: ${expenseAmount}</p>
        <p>Note: ${expenseDescription}</p>
    `;
    
    // Append new item div to items list
    itemList.appendChild(itemDiv);
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

    if (amount <= 0)
      {
        alert('input invalid');
        return;
      }
    
    // Here you can handle the addition of expense data, like sending it to a server or storing it locally
    console.log('Expense Description:', description);
    console.log('Expense Amount:', amount);
    console.log('Category:', category);
    console.log('Currency:', currency);
    document.getElementById('expensePopup').style.display = 'none';

    expense.push(expenseAmount.value);
    expense = expense.map(Number);
    console.log(expense); 

    totalexpense = 0;
    for (let j = 0; j < expense.length; j++) 
    {
      totalexpense = totalexpense + expense[j];
    }
  
  // Output the expense
  console.log("The sum of expense is:", totalexpense);


  //=========== calculation of savings ============

totalamount = totalincome - totalexpense ;
console.log("savings ", totalamount);

update(totalincome, totalexpense, totalamount );
addItem(date, expenseCategory, expenseAmount, expenseDescription);

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

function stats()
{
    var travel = parseInt(document.getElementById('transportation').value);
    var beauty = parseInt(document.getElementById('entertainment').value);
    var food = parseInt(document.getElementById('food').value);
    var savings = parseInt(document.getElementById('savings').value);
    var health = parseInt(document.getElementById('utilities').value);
    var other = parseInt(document.getElementById('other').value);
    var education = document.getElementById('education').value;

    var newData = [travel, beauty, food, totalamount, other, health, education];

    chart.data.datasets[0].data = newData;
    chart.update();

}
var chart = new Chart(document.getElementById('pie-chart'), {
  type: 'pie',
  data: {
      labels: ["Travel", "Beauty", "Food", "Savings", "Other", "Health", "Education"],
      datasets: [{
          backgroundColor: ["#e63946", "#254BDD", "#ffbe0b", "#1d3557", "#326998", "#0daf5e", "#ef2727"],
          data: [500, 300, 400, 300, 300, 400, 500]
      }]
  },
  options: {
      title: {
          display: true,
          text: 'Pie Chart for Expenditure'
      },
      responsive: true
  }
});




//================ Display outputs =================

// document.getElementById("outputIncome").innerHTML = totalincome;
// document.getElementById("outputExpense").innerHTML = totalexpense;
// document.getElementById("outputSaving").innerHTML = totalamount;


// const incomeCurrency = document.getElementById("incomeCurrency");
// const incomeDescription = document.getElementById("incomeDescription");
// const expenseDescription = document.getElementById("expenseDescription");
// const expenseAmount = document.getElementById("expenseAmount");
// const expenseCategory = document.getElementById("expenseCategory");
// const expenseCurrency = document.getElementById("expenseCurrency");
// const incomeAmount= document.getElementById("incomeAmount");
// const date = document.getElementById("date")





document.getElementById('income-display').querySelector('span').innerText = '$' + totalincomeincome;
document.getElementById('expense-display').querySelector('span').innerText = '$' + totalexpenseexpense;
document.getElementById('total-display').querySelector('span').innerText = '$' + totalamount;
}