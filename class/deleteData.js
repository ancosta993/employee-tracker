const inquirer = require('inquirer');
const db = require('../connections/db-connection.js');


class deleteData{
   constructor(){
      this.sqlDeleteDept = `DELETE FROM departments WHERE name = ?`;
      this.sqlDeleteRole =  `DELETE FROM roles WHERE title = ?`;
   };

   deleteDept(param){
      return new Promise((resolve, reject)=>{
         db.query(this.sqlDeleteDept, [param], (err, rows) => {
            if (rows === undefined){
               reject(new Error("Rows undefined"));
            } else {
               resolve(rows);
            }
         });
      });
   };

   deleteRole(param){
      return new Promise ((resolve, reject)=>{
         db.query(this.sqlDeleteRole, [param], (err, rows)=>{
            if (rows === undefined){
               reject(new Error("Rows undefined"));
            } else {
               resolve(rows);
            }
         });
      });
   };
   
}

module.exports = deleteData;