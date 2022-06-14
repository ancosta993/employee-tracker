const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
   {
      host: 'localhost',
      user: 'root',
      password: 'Sjeet2bang2000oct//QL',
      database: 'company'
   },
   console.log("Connected to the company database")
);

// ask the questions
const viewPrompts = () => {
   
   return   inquirer.prompt(
            {
               type:'list',
               name:"userChoice",
               message:'What would you like to do?',
               choices:["View All Departments", "View All Roles", "View All employees", "Add a Department", "Add a Role", "Add an employee", "Update an Employee Role"]
            }
         );
};



viewPrompts();



