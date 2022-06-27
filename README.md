# Employee-Tracker
Demonstration for the application can be found [here](https://drive.google.com/file/d/1k7lkjqDhbmYRrwVkxRHsfMFTnx-p4qN3/view) and [here](ttps://drive.google.com/file/d/1L6Stsx1xFo_-MbMMXo4Y5bYf6F87lGjM/view) in video format.

## Description
This is a command line application that stores employee information in a company through database. The users can use predifined queries thorugh the application  and retrieve information about the employees. 

## Table of Content
**[Description](#description)**  
**[Tools](#tools)**

## Tools 
Web Technologies used in this application:  
- Node.js
- MySQL
- npm Packages:
  - Inquirer.js
  - mysql2
  - dotenv
## Installation
The user must have node.js installed. After node.js installation, the npm libraries must be installed through the command line prompt `npm install inquirer mysql2 dotenv` in the application folder.  
Lastly, the user must download install MySQL.

## Usage
- `node index` initiates the application.
- The user is given the following queries:
  - View All Deaprtments
  - View All Roles
  - View All Employees
  - Add a Department
  - Add a Role
  - Add an employee
  - Update an Employee Role
  - Get Employees by managers
  - Get employees by departments
  - Delete a Department
  - Delete A Role
### View All Departments:
Shows the user a list of all the departments with their id in the databse in a table format:


| (index)  |  id  |     name        | 
|----------|------|-----------------|
|     0    |  1   |  'Engineering'  |     
|     1    |  2   |    'Finance'    |       
|     2    |  3   |     'Sales'     |  
|     3    |  4   |     'Legal'     |



### View All Roles:
Shows the user a list of all the roles, salary for that role, the department they belongs to and their id.


|  (index)  |  id  |       role_title       |   salary   |   department    |
|-----------|------|------------------------|------------|-----------------|
|     0     |  1   |    'Lead Engineer'     |  '150000'  |  'Engineering'  |
|     1     |  2   |  'Software Engineer'   |  '120000'  |  'Engineering'  |
|     2     |  3   |  'Accountant Manager'  |  '160000'  |    'Finance'    |
|     3     |  5   |      'Sales Lead'      |  '150000'  |     'Sales'     |
|     4     |  7   |   'Legal Team Lead'    |  '250000'  |     'Legal'     |
|     5     |  8   |        'Lawyer'        |  '190000'  |     'Legal'     |

### View All Employees
Shows the user a list of all the employees. It also shows the employees first and last name, their role, salary, department, and manager.

|  (index)  |  id  |  first_name  |   last_name   |          role          |   department    |   salary   |       manager        |
|-----------|------|--------------|---------------|------------------------|-----------------|------------|----------------------|
|     0     |  1   |   'Ashley'   |  'Rodriguez'  |    'Lead Engineer'     |  'Engineering'  |  '150000'  |         null         |
|     1     |  2   |   'Kevin'    |    'Tupik'    |  'Software Engineer'   |  'Engineering'  |  '120000'  |  'Ashley Rodriguez'  |
|     2     |  6   |    'Mike'    |    'Chan'     |  'Software Engineer'   |  'Engineering'  |  '120000'  |  'Ashley Rodriguez'  |
|     3     |  9   |  'Anthony'   |   'Dcosta'    |  'Software Engineer'   |  'Engineering'  |  '120000'  |  'Ashley Rodriguez'  |
|     4     |  12  |  'Lorentz'   |    'Gomez'    |  'Software Engineer'   |  'Engineering'  |  '120000'  |  'Ashley Rodriguez'  |
|     5     |  3   |   'Kunal'    |    'Singh'    |  'Accountant Manager'  |    'Finance'    |  '160000'  |         null         |
|     6     |  4   |   'Malia'    |    'Brown'    |          null          |    'Finance'    |    null    |  'Ashley Rodriguez'  |
|     7     |  14  |   'Barack'   |    'Obama'    |          null          |    'Finance'    |    null    |    'Kunal Singh'     |
|     8     |  5   |    'John'    |     'Doe'     |      'Sales Lead'      |     'Sales'     |  '150000'  |         null         |
|     9     |  13  |   'Barack'   |    'Brown'    |          null          |     'Sales'     |    null    |      'John Doe'      |
|    10     |  7   |   'Sarah'    |    'Lourd'    |   'Legal Team Lead'    |     'Legal'     |  '250000'  |         null         |
|    11     |  8   |    'Tom'     |    'Allen'    |        'Lawyer'        |     'Legal'     |  '190000'  |    'Sarah Lourd'     |
|    12     |  10  |  'Jeffrey'   |   'Berrios'   |        'Lawyer'        |     'Legal'     |  '190000'  |    'Sarah Lourd'     |
|    13     |  11  |   'Jamal'    |    'Agee'     |        'Lawyer'        |     'Legal'     |  '190000'  |    'Sarah Lourd'     |


### Add a department
Once clicked, the user is prompted to enter a department name. Upon entering a string, that string is added under the department category.

### Add a role
Once clicked the user is prompted to enter a role name, their salary, and their department. Thise strings are then added under the role category.  
? Enter new roles: Security  
? Enter salary for role: 54000  
? Which department does this role belong to: Asset Protection  

### Add an employee:
Once clicked, the user is prompted to enter the following:  

? What would you like to do? Add an employee  
? Enter the first name of the employee: Vaal  
? Enter the last name of the employee: HazaK  
? Enter the role of the employee: Security  
? Enter the manager's name of the employee: John Doe  

## Update employee role  
Once cliked the user is prompted the following:  

`
 Which employee Role:  (Use arrow keys)  
> Ashley Rodriguez  
  Kevin Tupik  
  Kunal Singh  
  Malia Brown  
  John Doe  
  Mike Chan  
  Sarah Lourd 
  ...
`
Once the user chooses the employee

`
? What is the new Role:  (Use arrow keys)  
> Lead Engineer  
  Software Engineer  
  Accountant Manager  
  Sales Lead  
  Legal Team Lead  
  Lawyer  
`

Once the choice is clicked, the employee role updates.
 
### Update employee manager
Once clicked, user is shown the following prompts:  
`
? Which employee's manager:  (Use arrow keys)  
> Ashley Rodriguez  
  Kevin Tupik  
  Kunal Singh  
  Malia Brown  
  John Doe  
  Mike Chan  
  Sarah Lour  
`
Once a choice is made, the following is asked:

`
? Choose the new Manger: (Use arrow keys)  
> Ashley Rodriguez  
  Kunal Singh  
  John Doe  
  Sarah Lourd  
`

### Get employee by managers
Once clicked, following is shown:  

|           |         name         |                           employee_names                          |
|-----------|----------------------|-------------------------------------------------------------------|
|     0     |  'Ashley Rodriguez'  |  'Kevin Tupik,Malia Brown,Mike Chan,Anthony Dcosta,Lorentz Gomez' |
|     1     |    'Kunal Singh'     |                           'Barack Obama'                          |
|     2     |      'John Doe'      |                           'Barack Brown'                          |
|     3     |    'Sarah Lourd'     |               'Tom Allen,Jeffrey Berrios,Jamal Agee'              |

### Get employee by departments
Once clicked, following is shown:   
| (index) |  department_name |                             employee_names                            |
|---------|------------------|-----------------------------------------------------------------------|
| 0       | 'Engineering'    | 'Ashley Rodriguez,Kevin Tupik,Mike Chan,Anthony Dcosta,Lorentz Gomez' |
| 1       |  'Finance'       |                'Kunal Singh,Malia Brown,Barack Obama'                 |
| 2       |   'Sales'        |                        'John Doe,Barack Brown'                        |
| 3       |   'Legal'        |          'Sarah Lourd,Tom Allen,Jeffrey Berrios,Jamal Agee'           |

### Delete a department
Once clicked, following is prompted:  
`
? Choose a department to delete (Use arrow keys)  
> Engineering  
  Finance  
  Sales  
  Legal  
  Asset Protection  
`

The clicked department is deleted.  

### Delete a Role
Once clicked, following is prompted:  
`
? Choose the Role to be Deleted (Use arrow keys)  
> Lead Engineer  
  Software Engineer  
  Accountant Manager  
  Sales Lead  
  Legal Team Lead  
  Lawyer     
`
The clicked role is deleted.   
