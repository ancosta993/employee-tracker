// const mysql = require('mysql2');
const inquirer = require('inquirer');
const {viewData, addData, updateData, deleteData} = require('./class/db_handlers');
const viewDataInst = new viewData();
const addDataInst = new addData();
const updateDataInst = new updateData();
const deleteDataInst = new deleteData();

// Connect to database
// const db = mysql.createConnection(
//    {
//       host: 'localhost',
//       user: 'root',
//       password: 'Sjeet2bang2000oct//QL',
//       database: 'company'
//    },
//    console.log("Connected to the company database")
// );

// ask the questions
const viewPrompts = () => {
   
   return   inquirer.prompt([
            {
               type:'list',
               name:"answer",
               message:'What would you like to do?',
               choices:["View All Departments", "View All Roles", "View All employees", "Add a Department", "Add a Role", "Add an employee", "Update an Employee Role", "Update employee managers","Get employees by managers", "Get employees by departments", "Delete A Department", "Delete A Role"]
            },
            { //ask this when add a department is chosen
               type:'input',
               message:"Enter new department:",
               name: 'newDept',
               when: ({answer}) => {
                  if (answer === 'Add a Department'){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            { //ask these when add a role is choosen
               type:'input',
               message:"Enter new roles:",
               name:'newRole',
               when: ({answer}) => {
                  if(answer === "Add a Role"){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            {
               type:'input',
               message:"Enter salary for role:",
               name:'newRoleSalary',
               when: ({answer}) => {
                  if(answer === "Add a Role"){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            {
               type:'input',
               message:"Which department does this role belong to:",
               name:'newRoleDept',
               when: ({answer}) => {
                  if(answer === "Add a Role"){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            //Ask these when add an employee is chosen
            {
               type: 'input',
               message: "Enter the first name of the employee:",
               name:"empFirstName",
               when: ({answer}) => {
                  if(answer === "Add an employee"){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            {
               type: 'input',
               message: "Enter the last name of the employee:",
               name:"empLastName",
               when: ({answer}) => {
                  if(answer === "Add an employee"){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            {
               type: 'input',
               message: "Enter the role of the employee:",
               name:"empRole",
               when: ({answer}) => {
                  if(answer === "Add an employee"){
                     return true;
                  } else {
                     return false;
                  }
               }
            },
            {
               type: 'input',
               message: "Enter the manager's name of the employee:",
               name:"empManager",
               when: ({answer}) => {
                  if(answer === "Add an employee"){
                     return true;
                  } else {
                     return false;
                  }
               }
            }
         ]);
};



viewPrompts().then(ansObj => {

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
      updateDataInst.getEmpNames().then(result => {
         const empNameArr = result.map(item => `${item.first_name} ${item.last_name}`);
         inquirer.prompt(
            {
               type:'list',
               message:'Which employee Role: ',
               name:'empToChange',
               choices: empNameArr
            }
         ).then((empObj) =>{
            const tempArr = [empObj];
            viewDataInst.getAllRoles().then(result => {
               const roleArr = result.map(item => `${item.role_title}`);
               inquirer.prompt(
                  {
                     type:'list',
                     message:"What is the new Role: ",
                     name:'newRole',
                     choices:roleArr
                  }
               ).then(newRole => {
                  tempArr.push(newRole);
                  updateDataInst.updateRole(tempArr);
               });
            });
         });
      });
   } else if (ansObj.answer === "Update employee managers"){
      updateDataInst.getEmpNames().then(result => {
         const empNameArr = result.map(item => `${item.first_name} ${item.last_name}`);
         inquirer.prompt(
            {
               type:'list',
               message:"Which employee's manager: ",
               name:'empToChange',
               choices: empNameArr
            }
         ).then(empObj => {
            const tempArr = [empObj];
            updateDataInst.getAllMan().then(result => {
               const manArr = result.map(item => item.name);
               inquirer.prompt({
                  type:'list',
                  name:'manToChange',
                  message:'Choose the new Manger:',
                  choices: manArr
               }).then(manObj => {
                  tempArr.push(manObj);
                  updateDataInst.updateManager(tempArr);
               });
            });
         });
      });
   } else if(ansObj.answer === 'Get employees by managers'){
      viewDataInst.getEmpsByMans().then(result => {
         console.table(result);
      });
   } else if(ansObj.answer === 'Get employees by departments'){
      viewDataInst.getEmpsByDept().then(result => {
         console.table(result);
      });
   } else if(ansObj.answer === "Delete A Department"){
      viewDataInst.getAllDept().then(result =>{
         const deptArr = result.map(item => item.name);
         inquirer.prompt({
            type:"list",
            name:"delDept",
            message:"Choose a department to delete",
            choices:deptArr
         }).then(deptObj  => deleteDataInst.deleteDept(deptObj.delDept));
      });
   } else if (ansObj.answer === "Delete A Role") {
      viewDataInst.getAllRoles().then(result => {
         const rolesArr = result.map(item => `${item.role_title}`);
         inquirer.prompt({
            type:'list',
            name:'delRole',
            message:"Choose the Role to be Deleted",
            choices: rolesArr
         }).then(roleObj =>{
            deleteDataInst.deleteRole(roleObj.delRole);
         });
      });
   } else {
      console.log('No Match');
   }
});



