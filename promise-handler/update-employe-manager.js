const inquirer = require('inquirer');

const {viewData, addData, updateData, deleteData} = require('../class/export-all-class');

const viewDataInst = new viewData();
const addDataInst = new addData();
const updateDataInst = new updateData();
const deleteDataInst = new deleteData()


const updateEmpManager = () => {
   updateDataInst.getEmpNames().then(result => {
      const empNameArr = result.map(item => `${item.first_name} ${item.last_name}`);
      inquirer.prompt(
         {
            type:'list',
            message:"Which employee's manager: ",
            name:'empToChange',
            choices: empNameArr
         }
      ).then(empObj => {
         const tempArr = [empObj];
         updateDataInst.getAllMan().then(result => {
            const manArr = result.map(item => item.name);
            inquirer.prompt({
               type:'list',
               name:'manToChange',
               message:'Choose the new Manger:',
               choices: manArr
            }).then(manObj => {
               tempArr.push(manObj);
               updateDataInst.updateManager(tempArr);
            });
         });
      });
   });
}

module.exports = updateEmpManager;