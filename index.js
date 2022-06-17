const inquirer = require('inquirer');


const {viewData, addData, updateData, deleteData} = require('./class/export-all-class');

const viewDataInst = new viewData();
const addDataInst = new addData();
const updateDataInst = new updateData();
const deleteDataInst = new deleteData();

// promise handlers
const updateEmpRole = require('./promise-handler/update-employee-role');
const updateEmpManager = require('./promise-handler/update-employe-manager');
const deleteDept = require('./promise-handler/delete-department');
const deleteRole = require('./promise-handler/delete-role');
// ask the questions

const initialPrompts = require('./utils/initial-prompts')

initialPrompts().then(ansObj => {

   if (ansObj.answer === "View All Departments") {
      viewDataInst.getAllDept().then(result => {
         console.table(result);
      }).catch(err => {
         console.log("Promise rejected: " + err);
      });

   } else if (ansObj.answer === "View All Roles"){
      viewDataInst.getAllRoles().then(result => {
         console.table(result);
      }).catch(err => {
         console.log("Promise rejected: "+ err)
      });


   } else if (ansObj.answer === "View All employees") {
      viewDataInst.getAllEmps().then(result => {
         console.table(result);
      }).catch(err => {
         console.log("Promise rejected: "+err);
      });


   } else if (ansObj.answer == "Add a Department") {
      addDataInst.addDept(ansObj.newDept);
      viewDataInst.getAllDept().then(result => {
         console.table(result);
      }).catch(err => {
         console.log("Promise rejected: " + err);
      });

   } else if(ansObj.answer == "Add a Role") {
      addDataInst.addRole([ansObj.newRole, ansObj.newRoleSalary, ansObj.newRoleDept]);
      viewDataInst.getAllRoles().then(result => {
         console.table(result);
      }).catch(err => {
         console.log("Promise rejected: "+ err)
      });


   } else if(ansObj.answer == "Add an employee") {
      console.log(ansObj);
      addDataInst.addEmp([ansObj.empFirstName, ansObj.empLastName, ansObj.empRole, ansObj.empManager]);
      viewDataInst.getAllEmps().then(result=> console.table(result)).catch(err=> console.log("Promise Rejected: " + err));


   } else if (ansObj.answer === "Update an Employee Role") {

      updateEmpRole();

   } else if (ansObj.answer === "Update employee managers"){
      updateEmpManager();
      
   } else if(ansObj.answer === 'Get employees by managers'){
      viewDataInst.getEmpsByMans().then(result => {
         console.table(result);
      });
   } else if(ansObj.answer === 'Get employees by departments'){
      viewDataInst.getEmpsByDept().then(result => {
         console.table(result);
      });
   } else if(ansObj.answer === "Delete A Department"){
      deleteDept();

   } else if (ansObj.answer === "Delete A Role") {
      deleteRole()
   } else {
      console.log('No Match');
   }
});



