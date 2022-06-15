// const mysql = require('mysql2');
const inquirer = require('inquirer');
const {viewData, addData} = require('./class/db_handlers');
const viewDataInst = new viewData();
const addDataInst = new addData();

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
               choices:["View All Departments", "View All Roles", "View All employees", "Add a Department", "Add a Role", "Add an employee", "Update an Employee Role"]
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
            // {
            //    type:'input',
            //    message:'Enter employee department:',
            //    name:"empDept",
            //    when: ({answer}) => {
            //       if (answer === "Add an employee") {
            //          return true;
            //       } else {
            //          return false;
            //       }
            //    }
            // },
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
            },
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
         console.log(result);
      }).catch(err => {
         console.log("Promise rejected: "+ err)
      });


   } else if (ansObj.answer === "View All employees") {
      viewDataInst.getAllEmps().then(result => {
         console.log(result);
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
   } else {
      console.log("No Match");
   }
});



