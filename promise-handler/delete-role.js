const inquirer = require('inquirer');

const {viewData, addData, updateData, deleteData} = require('../class/export-all-class');

const viewDataInst = new viewData();
const addDataInst = new addData();
const updateDataInst = new updateData();
const deleteDataInst = new deleteData();


const deleteRole = () => {
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
};

module.exports = deleteRole;