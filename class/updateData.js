const db = require('../connections/db-connection');



class updateData{
   constructor(){
      this.sqlEmpNames = `SELECT first_name, last_name FROM employees`;
      this.sqlEmpId = `SELECT id FROM employees WHERE first_name = ? AND last_name = ?`;
      this.sqlRoleId = `SELECT id FROM roles WHERE title = ? `;
      this.sqlUpdateDeptAndRole = `UPDATE employees
      SET employees.role_id = ?, employees.department_id = (SELECT roles.department_id FROM roles WHERE roles.id = ?), employees.manager_id = (SELECT managers.id FROM managers WHERE managers.department_id = employees.department_id)
      WHERE id = ?;`
      this.sqlUpdateRole = `UPDATE employees SET role_id = ? WHERE id = ?`;
      this.sqlUpMan = `UPDATE employees SET employees.manager_id = (SELECT managers.id FROM managers WHERE managers.name = ?) WHERE id = ?;`;
      this.sqlGetAllMan = 'SELECT * FROM managers;'
   };

   getEmpNames() {
      return new Promise((resolve, reject) => {
         db.query(this.sqlEmpNames, (err, rows) => {
            if (rows === undefined){
               reject(new Error ("Rows not defined"));
            } else {
               resolve(rows);
            }
         });
      });
   };

   getEmpId(params){
      return new Promise((resolve, reject)=>{
         db.query(this.sqlEmpId, params, (err, rows)=>{
            if(rows === undefined){
               reject(new Error("Rows undefined"));
            } else {
               resolve(rows);
            }
         });
      });
   }

   getRoleId(params){
      return new Promise((resolve, reject)=>{
         db.query(this.sqlRoleId, params, (err, rows)=>{
            if(rows === undefined){
               reject(new Error("Rows undefined"));
            } else {
               resolve(rows);
            }
         });
      });
   }


   updateRole(paramsArr){
      this.getEmpId(paramsArr[0].empToChange.split(' ')).then(empId => {
         this.getRoleId(paramsArr[1].newRole).then(roleId => {
            return new Promise((resolve, reject) => {
               db.query(this.sqlUpdateDeptAndRole, [roleId[0].id, roleId[0].id, empId[0].id], (err, rows)=>{
                  if (rows === undefined){
                     reject(new Error("Rows undefined"));
                  } else {
                     resolve (rows);
                  }
               });
            });
         });
      });
   };

   // Bonus
   getAllMan(){
   return new Promise((resolve, reject)=>{
      db.query(this.sqlGetAllMan, (err,rows)=>{
         if(rows === undefined){
            reject(new Error("Rows Undefined"));
         } else {
            resolve(rows);
         }
      })
   })
   }

   updateManager(paramsArr){
      this.getEmpId(paramsArr[0].empToChange.split(' ')).then(empId => {
         return new Promise((resolve, reject) => {
            db.query(this.sqlUpMan, [paramsArr[1].manToChange, empId[0].id], (err, rows) => {
               if(rows === undefined){
                  reject(new Error("Rows undefined"));
               } else {
                  resolve(rows);
               }
            });
         });
      });
   };
}

module.exports = updateData;
