let totalSalaries = 0;

let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let employeeID = document.getElementById("employee-id");

let employeeTitle = document.getElementById("employee-title");
let employeeSalary = document.getElementById("employee-salary");

let employeeTable = document.getElementById("employee-table");
let salaryDiv = document.getElementById("totalSalariesDiv");

onReady();

function onReady() {
  console.log("java is ready");
  displayTotalSalaries();
}

function addEmployeeData(event) {
  event.preventDefault();
  totalSalaries += Number(employeeSalary.value);
  console.log(employeeSalary.value);
  employeeTable.innerHTML += `<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${employeeID.value}</td>
    <td>${employeeTitle.value}</td>
    <td>${employeeSalary.value}</td>
    <td><button onClick="removeEmployeeData(event)">Delete</button></td>
    </tr>`;
  firstName.value='';
  lastName.value='';
  employeeID.value='';
  employeeTitle.value='';
  employeeSalary.value='';
  console.log(totalSalaries);
  displayTotalSalaries(event);
}

function removeEmployeeData(event) {
  const row = event.target.closest("tr");
  const salaryToRemove = Number(row.children[4].innerText);
  row.remove();
  totalSalaries -= salaryToRemove;
  displayTotalSalaries();
}

function displayTotalSalaries() {
  salaryDiv.innerHTML = `<p>Total Monthly: ${totalSalaries / 12}</p>`;
}
