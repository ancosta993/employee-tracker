const mysql = require('mysql2');


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


class viewData{
   constructor() {
      this.sqlAllDept = `SELECT * FROM departments`;

      this.sqlAllRoles = `SELECT r.id, r.title AS role_title, r.salary, d.name AS department FROM roles r LEFT JOIN departments d ON r.department_id = d.id`;

      this.sqlAllEmps = `SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary AS salary, m.name AS manager
      FROM employees e
      LEFT JOIN departments d ON e.department_id = d.id
      LEFT JOIN managers m ON e.manager_id = m.id
      LEFT JOIN roles r ON e.role_id = r.id;`;

      
   }
   getAllDept(){
      return new Promise ((resolve, reject) => {
         db.query(this.sqlAllDept, (err, rows) => {
            if(rows===undefined){
               console.log(new Error("Error: rows is undefiend"))
            } else {
               resolve(rows);
            }
         });
      });
   };

   getAllRoles(){
      return new Promise((resolve, reject)=>{
         db.query(this.sqlAllRoles, (err, rows)=>{
            if (rows === undefined){
               reject(new Error('Error: rows is undefined'));
            } else {
               resolve(rows);
            }
         });
      });
   };

   getAllEmps(){
      return new Promise ((resolve, reject) => {
         db.query(this.sqlAllEmps, (err, rows) => {
            if (rows === undefined){
               reject(new Error("Error: rows is undefiend"));
            } else {
               resolve(rows);
            }
         });
      });
   };

};

class addData {
   constructor(){
      this.sqlAddDept = `INSERT INTO departments (name) VALUES (?)`;
      this.sqlAddRole = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
   }
   addDept(params){
      db.query(this.sqlAddDept, [params], (err,res) => {
         if(err){
            console.log(err.message);
            return;
         }
         console.log(`Added ${params} to the Departments`);
      });
   };

   addRole(params){
      
      const promiseArr = new viewData().getAllDept().then((result) => {
         for (let i=0;i<result.length;i++){
            if(result[i].name === params[2]){
               params[2] = result[i].id;
            }
         };
         
         db.query(this.sqlAddRole, params, (err, res)=>{
            if(err){
               console.log(err.message);
               return;
            }
            console.log(`Added ${params} to the Roles`);
         });
      });

   };

};

module.exports = {viewData, addData};