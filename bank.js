let myBank = {
  Accounts: [],
  totalDeposits: 0,
  totalAccounts: 0,
};

// function account(name, accountNumber, amount, pin) {
//   this.name = name;
//   this.accountNumber = accountNumber;
//   this.amount = amount;
//   this.pin = pin;
// }

// function createAccounts(name, accountNumber, amount, pin = 1432) {
//   let client1 = new account(name, accountNumber, amount, pin);
//   myBank.Accounts.push(client1);
//   myBank.totalDeposits = myBank.totalDeposits + amount;
//   myBank.totalAccounts = myBank.totalAccounts + 1;
// }
// createAccounts("hrk", 1234, 1000);
// createAccounts("hritik", 54678, 1000);
// createAccounts("abc", 98765, 1000);
// createAccounts("bcd", 78765, 1000);
// createAccounts("kfc", 1987, 1000);
// createAccounts("boss", 12321, 1000);

// console.log(myBank);
// function withdraw(accountN, pinN, amount) {
//   let account, i;
//   for (i = 0; i < myBank.Accounts.length; i++) {
//     if (myBank.Accounts[i].accountNumber === accountN) {
//       account = myBank.Accounts[i];
//       // console.log(account);
//     }
//   }
//   if (!account) {
//     console.log("try again");
//   }
//   if (account) {
//     if (account.pin === pinN) {
//       // console.log(pinN);
//       account.amount = account.amount - amount;
//       myBank.totalDeposits = myBank.totalDeposits - amount;
//     } else {
//       console.log("try again");
//     }
//   }
// } //func
// withdraw(1987, 1432, 300);
// withdraw(124, 1432, 100);

console.log("mybank", myBank);

//  this is new code
var selectedRow = null;
function submit() {
  // event.preventDefault();
  console.log(myBank.Accounts);
  var formData = readFormData();
  if (selectedRow === null || updatedindex === null) {
    myBank.Accounts.push(formData);
    insertNewRecord(formData);
  } else {
    updateRecord(formData, updatedindex);
    console.log(myBank.Accounts, "updaterecords");
  }
  resetForm();
}
// Read operation using this function
function readFormData() {
  let formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["accountNo"] = document.getElementById("accountNo").value;
  formData["amount"] = document.getElementById("amount").value;

  return formData;
}

// Create operation

function insertNewRecord() {
  let displayTable = "";
  myBank.Accounts.map((tabData, i) => {
    displayTable += "<tr class='active-row'>";
    displayTable += `<td>${tabData.name}</td>`;
    displayTable += `<td>${tabData.accountNo}</td>`;
    displayTable += `<td>${tabData.amount}</td>`;
    displayTable += `<td><button onclick='onEdit(this,${i})' style= 'background-color:#fff200;  boder-radius:5px;border:1px;'>EDIT</button></td>`;
    displayTable += `<td><button onclick='onDelete(this,${i})' style= 'background-color:red;boder-radius:5px;border:1px;'>delete</button></td>`;
    displayTable += "</tr>";
    document.getElementById("display").innerHTML = displayTable;
  });
}

// To Reset the data of fill input
function resetForm() {
  document.getElementById("name").value = "";
  document.getElementById("accountNo").value = "";
  document.getElementById("amount").value = "";

  selectedRow = null;
}

// For Edit operation
var updatedindex = null;
function onEdit(e, i) {
  selectedRow = e.parentElement.parentElement;
  document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  document.getElementById("accountNo").value = selectedRow.cells[1].innerHTML;
  document.getElementById("amount").value = selectedRow.cells[2].innerHTML;

  updatedindex = {
    ind: i,
    name: selectedRow.cells[0].innerHTML,
    accountNo: selectedRow.cells[1].innerHTML,
    amount: selectedRow.cells[2].innerHTML,
  };
}
//  let name,accountNo,amount;
function updateRecord(formData, updateI) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.accountNo;
  selectedRow.cells[2].innerHTML = formData.amount;

  console.log(
    formData.name,
    formData.accountNo,
    formData.amount,
    "formdata value"
  );
  myBank.Accounts.forEach((ele, index) => {
    if (ele.i === updateI.i) {
      myBank.Accounts[index] = {
        name: document.getElementById("name").value,
        accountNo: document.getElementById("accountNo").value,
        amount: document.getElementById("amount").value,
      };
    }
  });
  updatedindex = null;
  selectedRow = null;
  console.log(myBank.Accounts, "inside update");
}

function onDelete(td, i) {
  console.log("delete", i);
  if (confirm("Are you sure you want to delete this record?")) {
    td.parentElement.parentElement.remove();

    var delArr = myBank.Accounts.filter((ele, index) => index !== i);

    console.log(delArr, "del");
    myBank.Accounts = delArr;
  }
  resetForm();
}

function onSearch() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("tablesearch");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// let a = {
//   name: "hrk",
//   b: {
//     brun: () => {
//       ("run");
//     },
//   },
//   c: {
//     crun: () => {
//       ("fun");
//     },
//   },
// };
// a.b.brun();
// a.c.crun();
