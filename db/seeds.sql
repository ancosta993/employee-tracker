-- department table
INSERT INTO departments (name)
VALUES 
   ("Engineering"),
   ("Finance"),
   ("Sales"),
   ("Legal");

-- Role table data
INSERT INTO roles (title, salary, department_id)
VALUES
   ("Lead Engineer",150000, 1),
   ("Software Engineer", 120000,1),
   ("Accountant Manager",160000,2),
   ("Accountant", 125000,2),
   ("Sales Lead", 150000,3),
   ("Salesperson", 80000,3),
   ("Legal Team Lead",250000,4),
   ("Lawyer", 190000, 4);


INSERT INTO managers (name, department_id)
VALUES   
   ("Ashley Rodriguez", 1),
   ("Kunal Singh", 2),
   ("John Doe", 3),
   ("Sarah Lourd", 4);


INSERT INTO employees (first_name, last_name, role_id, department_id, manager_id)
VALUES   
   ("Ashley", "Rodriguez", 1, 1, NULL),
   ("Kevin", "Tupik", 2, 1, 1),
   ("Kunal", "Singh", 3, 2, NULL),
   ("Malia", "Brown",4,2,2),
   ("John","Doe", 5, 3, NULL),
   ("Mike","Chan", 6, 3, 3),
   ("Sarah", "Lourd", 7, 4,NULL),
   ("Tom", "Allen", 8, 4,4);


SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, managers.name AS managers
FROM employees
LEFT JOIN departments ON employees.department_id = departments.id
LEFT JOIN managers ON employees.manager_id = managers.id
LEFT JOIN roles ON employees.role_id = roles.id;

