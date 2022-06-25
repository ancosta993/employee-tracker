const inquirer = require('inquirer');
const {viewData, addData, updateData, deleteData} = require('../class/export-all-class');

const viewDataInst = new viewData();
const addDataInst = new addData();
const updateDataInst = new updateData();
const deleteDataInst = new deleteData()


const updateEmpRole = () => {
   updateDataInst.getEmpNames().then(result => {
      const empNameArr = result.map(item => `${item.first_name} ${item.last_name}`);
      inquirer.prompt(
         {
            type:'list',
            message:'Which employee Role: ',
            name:'empToChange',
            choices: empNameArr
         }
      ).then((empObj) =>{
         const tempArr = [empObj];
         viewDataInst.getAllRoles().then(result => {
            const roleArr = result.map(item => `${item.role_title}`);
            inquirer.prompt(
               {
                  type:'list',
                  message:"What is the new Role: ",
                  name:'newRole',
                  choices:roleArr
               }
            ).then(newRole => {
               tempArr.push(newRole);
               updateDataInst.updateRole(tempArr);
            })
            .catch(err => {
               console.log(err);
            });
         });
      });
   });
}


module.exports = updateEmpRole;