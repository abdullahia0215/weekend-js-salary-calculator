onReady();


function onReady(){
    console.log('java is ready')
}





let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let employeeID = document.getElementById("employee-id")

let employeeTitle = document.getElementById("employee-title")
let employeeSalary = document.getElementById("employee-salary")

let employeeTable = document.getElementById("employee-table")



function addEmployeeData (event){
    event.preventDefault();
    employeeTable.innerHTML += `<tr>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${employeeID.value}</td>
    <td>${employeeTitle.value}</td>
    <td>${employeeSalary.value}</td>
    </tr>`

    firstName.value='';
    lastName.value='';
    employeeID.value='';
    employeeTitle.value='';
    employeeSalary.value='';

}