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

const popup = document.getElementById("statPopup")

function stats()
{
  popup.showModal()
}
function updateChart()
{
    var travel = parseInt(document.getElementById('transportation').value);
    var beauty = parseInt(document.getElementById('entertainment').value);
    var food = parseInt(document.getElementById('food').value);
    var health = parseInt(document.getElementById('utilities').value);
    var other = parseInt(document.getElementById('other').value);
    var education = document.getElementById('education').value;

    var newData = [travel, beauty, food, other, health, education];

    chart.data.datasets[0].data = newData;
    chart.update();

}
var chart = new Chart(document.getElementById('pie-chart'), {
  type: 'pie',
  data: {
      labels: ["Travel", "Beauty", "Food", "Other", "Health", "Education"],
      datasets: [{
          backgroundColor: ["#e63946", "#254BDD", "#ffbe0b", "#326998", "#0daf5e", "#ef2727"],
          data: [500, 300, 400, 300, 400, 500]
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


const displayIncome = document.getElementById("outputIncome");
const displayExpense = document.getElementById("ouputExpense");
const displayTotal = document.getElementById("outputTotal");



   // Function to add new item
   function addItem2(date, expenseCategory, expenseAmount, expenseDescription) {
    console.log({"add":date})
    const itemList = document.getElementById("itemsList");
    
    // Create div element for new item
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("list-item");
    
    // Fill div with item details
    itemDiv.innerHTML = `
        <div> 
        <p>Date: ${date}</p>
        <p>Category: ${expenseCategory}</p>
        </div>
        <div>
        <p>Amount: ${expenseAmount}</p>
        <p>Note: ${expenseDescription}</p>
        </div>
    `;
        // Append new item div to items list
        itemList.appendChild(itemDiv);
    

}  

// Function to add new item
function addItem1(date1, incomeAmount, incomeDescription) {
 console.log({"add":date1})
 const itemList = document.getElementById("itemsList");
 
 // Create div element for new item
 const itemDiv = document.createElement("div");
 itemDiv.classList.add("list-item");
 
 // Fill div with item details
 itemDiv.innerHTML = `
     <div> 
     <p> <strong> Income: </strong> </p>
     <p>Date: ${date1}</p>
     </div>
     <div>
     <p>Amount: ${incomeAmount}</p>
     <p>Note: ${incomeDescription}</p>
     </div>
 `;
     // Append new item div to items list
     itemList.appendChild(itemDiv);
 

}
//   // Function to add new item
//   function addItem(date, incomeAmount, incomeDescription) {
//     const itemList = document.getElementById("itemsList");
    
//     // Create div element for new item
//     const itemDiv = document.createElement("div");
//     itemDiv.classList.add("list-item");
    
//     // Fill div with item details
//     itemDiv.innerHTML = `
//         <p>Date: ${date}</p>
//         <p>Amount: ${incomeAmount}</p>
//         <p>Note: ${incomeDescription}</p>
//     `;
    
//     // Append new item div to items list
//     itemList.appendChild(itemDiv);
// }




const incomeCurrency = document.getElementById("incomeCurrency");
// const addIncome = document.getElementById("addIncome");
// const addExpense = document.getElementById("addExpense");
const incomeDescription = document.getElementById("incomeDescription");
const expenseDescription = document.getElementById("expenseDescription");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const expenseCurrency = document.getElementById("expenseCurrency");
const incomeAmount= document.getElementById("incomeAmount");
const date = document.getElementById("date2").value;

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

var date1 = document.getElementById('date1').value;

addItem1(date1, amount, description);

}

function update(totalincome, totalexpense, totalamount )
{
    displayIncome.innerHTML = `₹${totalincome}`;
    displayExpense.innerHTML = `₹${totalexpense}`;
    displayTotal.innerHTML = `₹${totalamount}`;
}

document.getElementById('expensePopup').addEventListener('submitExpense', function(event) 
{
  event.preventDefault();

  var date = document.getElementById('date2').value;
  var category = document.getElementById('expenseCategory').value;
  var amount = document.getElementById('expenseAmount').value;
  var note = document.getElementById('expenseDescription').value;

  var outputDiv = document.createElement('div');
  outputDiv.classList.add('output-item');
  outputDiv.innerHTML = `
    <strong>Date:</strong> ${date}<br>
    <strong>Category:</strong> ${category}<br>
    <strong>Amount:</strong> $${amount}<br>
    <strong>Note:</strong> ${note}
  `;

  document.getElementById('expenseList').appendChild(outputDiv);

  // Reset form fields
  // document.getElementById('date').value = 'tfhghj';
  // document.getElementById('expenseCategory').value = '';
  // document.getElementById('expenseAmount').value = '';
  // document.getElementById('expenseDescription').value = '';
});

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

var date2 = document.getElementById('date2').value;

update(totalincome, totalexpense, totalamount );
addItem2(date2, category, amount, description);

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
    var health = parseInt(document.getElementById('utilities').value);
    var other = parseInt(document.getElementById('other').value);
    var education = document.getElementById('education').value;

    var newData = [travel, beauty, food, other, health, education];

    chart.data.datasets[0].data = newData;
    chart.update();

}
var chart = new Chart(document.getElementById('pie-chart'), {
  type: 'pie',
  data: {
      labels: ["Travel", "Beauty", "Food", "Other", "Health", "Education"],
      datasets: [{
          backgroundColor: ["#e63946", "#254BDD", "#ffbe0b", "#326998", "#0daf5e", "#ef2727"],
          data: [500, 300, 400, 300, 400, 500]
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
