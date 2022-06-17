
const db = require('../connections/db-connection');


class viewData{
   constructor() {
      this.sqlAllDept = `SELECT * FROM departments`;

      this.sqlAllRoles = `SELECT r.id, r.title AS role_title, r.salary, d.name AS department FROM roles r LEFT JOIN departments d ON r.department_id = d.id`;

      this.sqlAllEmps = `SELECT e.id, e.first_name, e.last_name, r.title AS role, d.name AS department, r.salary AS salary, m.name AS manager
      FROM employees e
      LEFT JOIN departments d ON e.department_id = d.id
      LEFT JOIN managers m ON e.manager_id = m.id
      LEFT JOIN roles r ON e.role_id = r.id
      ORDER BY e.department_id;`;

      this.sqlEmpsByMans = `SELECT managers.name, GROUP_CONCAT(employees.first_name,' ', employees.last_name) AS employee_names FROM employees INNER JOIN managers ON employees.manager_id = managers.id group by employees.manager_id;`;

      this.sqlGetEmpByDept = `SELECT d.name AS department_name, GROUP_CONCAT(e.first_name," ",e.last_name) AS employee_names FROM employees e INNER JOIN departments d ON e.department_id = d.id GROUP BY e.department_id;`;
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

   getEmpsByMans(){
      return new Promise((resolve, reject) => {
         db.query(this.sqlEmpsByMans, (err, rows)=>{
            if (rows === undefined){
               reject(new Error("Rows undefined"));
            } else {
               resolve(rows);
            }
         });
      });
   };

   getEmpsByDept(){
      return new Promise((resolve, reject)=>{
         db.query(this.sqlGetEmpByDept, (err, rows)=>{
            if(rows === undefined){
               reject(new Error("Rows undefined"));
            } else {
               resolve(rows);
            }
         });
      });
   };
};

module.exports = viewData;