var addbtn = document.getElementById('addbtn');
var empName = document.getElementById('productName');
var empMobile = document.getElementById('productCompany');
var empDep = document.getElementById('productPrice');
var empAge = document.getElementById('productDescription');
var inputs = document.getElementsByClassName("form-control");
var employees ;
if (localStorage.getItem(`employeelist`)==null){
    employees=[];

}else{
    employees=JSON.parse(localStorage.getItem(`employeelist`));
    displayemp();

}




addbtn.onclick = function () {
    addemp();
    displayemp();
    resetForm();



}


//var test=JSON.parse(localStorage.getItem(`employeelist`));

function addemp() {
    var emp = {
        empName: productName.value,
        empMobile: productCompany.value,
        empDep: productPrice.value,
        empAge: productDescription.value





    }
    employees.push(emp);
    localStorage.setItem(`employeelist`,JSON.stringify(employees));//inspect -------> application ---->localstorage(save data in site )
    


}
function displayemp() {
    var emplo = "";
    for (var i = 0; i < employees.length; i++) {
        emplo += `<tr><td>` + employees[i].empName +
        `</td><td>َ`  + employees[i]. empMobile +
        `</td><td>`+employees[i].empDep +
        `</td><td>`+ employees[i].empAge
        +`</td><td><button onclick='deleteemp("+i+")'  class='btn btn-btn btn-warning'>Delete</button></td>
        <td><button onclick='updateemp(this)'  class='btn btn-success'>Edit</button></td>

        </tr>`;
    } document.getElementById("tableBody").innerHTML = emplo;


}
function resetForm() {
    for (var i = 0; i < inputs.length; i++) {

        inputs[i].value = "";

    }
}
function deleteemp(t) {
employees.splice(t,1);
localStorage.setItem(`employeelist`,JSON.stringify(employees));//تحديث للبيانات 
displayemp();


}
function updateemp(index){
   /* for (var i = 0; i < inputs.length; i++){*/
   // console.log(JSON.stringify(employees[0]));
  // inputs[i].value=employees[i].empName,employees[i]. empMobile ,employees[i].empDep,employees[i].empAge;
 /* var upempName = document.getElementById('productName').value;
var upempMobile = document.getElementById('productCompany').value;
var upempDep = document.getElementById('productPrice').value;
var upempAge = document.getElementById('productDescription').value;
 
        employees[index].empName=upempName ;
        employees[index].empMobile=upempMobile ;
        employees[index].empDep=upempDep ;
        employees[index].empAge=upempAge ;
        displayemp();*/
        






    }

   
  



//localStorage.setItem(`name`,`ali`);//لتخزين الداتا والحفاظ عليها للموقع على الرغم من التحدي ث بواسطة inspect -------> application ---->localstorage//

function search(searchTxt){
    var emplo = "";
    for (var i = 0; i < employees.length; i++) {
        if(employees[i].empName.toLowerCase().includes(searchTxt.toLowerCase())){

        
        emplo += `<tr><td>` + employees[i].empName +
        `</td><td>َ`  + employees[i]. empMobile +
        `</td><td>`+employees[i].empDep +
        `</td><td>`+ employees[i].empAge
        +`</td><td><button onclick='deleteemp("+i+")'  class='btn btn-btn btn-warning'>Delete</button></td>
        <td><button onclick='updateemp(this)' class='btn btn-success'>edit</button> </td>

        </tr>`;

    }
    }
    document.getElementById("tableBody").innerHTML = emplo;
}





   