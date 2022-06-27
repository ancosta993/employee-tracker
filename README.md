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

┌─────────┬────┬────────────┬─────────────┬──────────────────────┬───────────────┬──────────┬────────────────────┐
│ (index) │ id │ first_name │  last_name  │         role         │  department   │  salary  │      manager       │
├─────────┼────┼────────────┼─────────────┼──────────────────────┼───────────────┼──────────┼────────────────────┤
│    0    │ 1  │  'Ashley'  │ 'Rodriguez' │   'Lead Engineer'    │ 'Engineering' │ '150000' │        null        │
│    1    │ 2  │  'Kevin'   │   'Tupik'   │ 'Software Engineer'  │ 'Engineering' │ '120000' │ 'Ashley Rodriguez' │
│    2    │ 6  │   'Mike'   │   'Chan'    │ 'Software Engineer'  │ 'Engineering' │ '120000' │ 'Ashley Rodriguez' │
│    3    │ 9  │ 'Anthony'  │  'Dcosta'   │ 'Software Engineer'  │ 'Engineering' │ '120000' │ 'Ashley Rodriguez' │
│    4    │ 12 │ 'Lorentz'  │   'Gomez'   │ 'Software Engineer'  │ 'Engineering' │ '120000' │ 'Ashley Rodriguez' │
│    5    │ 3  │  'Kunal'   │   'Singh'   │ 'Accountant Manager' │   'Finance'   │ '160000' │        null        │
│    6    │ 4  │  'Malia'   │   'Brown'   │         null         │   'Finance'   │   null   │ 'Ashley Rodriguez' │
│    7    │ 14 │  'Barack'  │   'Obama'   │         null         │   'Finance'   │   null   │   'Kunal Singh'    │
│    8    │ 5  │   'John'   │    'Doe'    │     'Sales Lead'     │    'Sales'    │ '150000' │        null        │
│    9    │ 13 │  'Barack'  │   'Brown'   │         null         │    'Sales'    │   null   │     'John Doe'     │
│   10    │ 7  │  'Sarah'   │   'Lourd'   │  'Legal Team Lead'   │    'Legal'    │ '250000' │        null        │
│   11    │ 8  │   'Tom'    │   'Allen'   │       'Lawyer'       │    'Legal'    │ '190000' │   'Sarah Lourd'    │
│   12    │ 10 │ 'Jeffrey'  │  'Berrios'  │       'Lawyer'       │    'Legal'    │ '190000' │   'Sarah Lourd'    │
│   13    │ 11 │  'Jamal'   │   'Agee'    │       'Lawyer'       │    'Legal'    │ '190000' │   'Sarah Lourd'    │
└─────────┴────┴────────────┴─────────────┴──────────────────────┴────────

## Add a department
Once clic

 


