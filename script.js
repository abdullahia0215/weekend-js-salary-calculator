onReady();


function onReady(){
    console.log('java is ready')
}



let totalSalaries = 0;

let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let employeeID = document.getElementById("employee-id")

let employeeTitle = document.getElementById("employee-title")
let employeeSalary = (document.getElementById("employee-salary"));

let employeeTable = document.getElementById("employee-table")



function addEmployeeData (event){
    event.preventDefault();     
    totalSalaries += Number(employeeSalary.value);
    console.log(employeeSalary.value)
    employeeTable.innerHTML += `<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${employeeID.value}</td>
    <td>${employeeTitle.value}</td>
    <td>${employeeSalary.value}</td>
    <td><button onClick="removeEmployeeData(event)">Delete</button></td>
    </tr>`
    // firstName.value='';
    // lastName.value='';
    // employeeID.value='';
    // employeeTitle.value='';
    // employeeSalary.value='';
    console.log(totalSalaries)
}

function removeEmployeeData (event){
    event.target.closest('tr').remove();
    totalSalaries -= Number(employeeSalary.value);
    // console.log('remove button')
    console.log(`new salaries total:${totalSalaries}`)
}

