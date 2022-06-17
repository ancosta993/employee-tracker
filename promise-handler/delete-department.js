const inquirer = require('inquirer');

const {viewData, addData, updateData, deleteData} = require('../class/export-all-class');

const viewDataInst = new viewData();
const addDataInst = new addData();
const updateDataInst = new updateData();
const deleteDataInst = new deleteData();

const deleteDept = () => {
   viewDataInst.getAllDept().then(result =>{
      const deptArr = result.map(item => item.name);
      inquirer.prompt({
         type:"list",
         name:"delDept",
         message:"Choose a department to delete",
         choices:deptArr
      }).then(deptObj  => deleteDataInst.deleteDept(deptObj.delDept));
   });
}

module.exports = deleteDept;