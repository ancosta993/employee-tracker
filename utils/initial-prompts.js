const inquirer = require('inquirer');

const initialPrompts = () => {
   
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

module.exports = initialPrompts;