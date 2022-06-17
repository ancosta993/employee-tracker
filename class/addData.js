const db = require('../connections/db-connection');
const viewData = require('./viewData');
const updateData = require('./updateData');

class addData {
   constructor(){
      this.sqlAddDept = `INSERT INTO departments (name) VALUES (?)`;
      this.sqlAddRole = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
      this.sqlAddEmp = `INSERT INTO employees (first_name, last_name, role_id, department_id, manager_id) VALUES (?,?,?,?,?)`;
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

   addEmp(params) {
      const promiseArr = new viewData().getAllRoles().then(result => {
         for (let i=0;i<result.length;i++){
            if(result[i].role_title === params[2]){
               params[2] = result[i].id;
               params.splice(3, 0, result[i].department);
            }
         };
         return params;
      }).then(params => {
         const promiseArr = new viewData().getAllDept().then(result => {
            for (let i=0;i<result.length;i++){
               if(result[i].name === params[3]){
                  params[3] = result[i].id;
               }
            };
            
            // managers
            new updateData().getAllMan().then(result => {
               console.log("Params before manager: " + params)
               for (let i=0;i<result.length;i++){
                  if (result[i].name === params[4]){
                     params[4] = result[i].id;
                  }
               };

               db.query(this.sqlAddEmp, params, (err, res)=>{
                  if(err){
                     console.log("Error: " + err.message);
                     return;
                  }
                  console.log(`Added ${params} in employees table`);
               });
            });
         });
      });
   };
};

module.exports = addData;