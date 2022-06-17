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
   ("Tom", "Allen", 8, 4,4),
   ("Anthony", "Dcosta", 2, 1, 1),
   ("Jeffrey", "Berrios", 8, 4,4),
   ("Jamal", "Agee", 8, 4,4),
   ("Lorentz", "Gomez", 2, 1, 1),
   ("Barack", "Brown",4,2,2);
   


-- SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, managers.name AS managers
-- FROM employees
-- LEFT JOIN departments ON employees.department_id = departments.id
-- LEFT JOIN managers ON employees.manager_id = managers.id
-- LEFT JOIN roles ON employees.role_id = roles.id;

-- INSERT INTO departments(name)
-- VALUES
--    ('Service');

-- SELECT r.title, d.name FROM roles r
-- LEFT JOIN departments d ON r.department_id = d.id
-- WHERE title = "Sales Lead";

-- UPDATE employees
-- SET employees.role_id = 4, employees.department_id = (SELECT roles.department_id FROM roles WHERE roles.id = 4), employees.manager_id = (SELECT managers.id FROM managers WHERE managers.department_id = employees.department_id)
-- WHERE id = 2;


-- UPDATE employees SET employees.manager_id = (SELECT managers.id FROM managers WHERE managers.name = "Sarah Lourd") WHERE id = 2;

-- select managers.name, group_concat(employees.first_name,' ', employees.last_name) AS employee_names from employees 
-- INNER JOIN managers ON employees.manager_id = managers.id group by employees.manager_id

-- SELECT d.name AS department_name, GROUP_CONCAT(e.first_name," ",e.last_name) AS employee_names FROM employees e
-- INNER JOIN departments d ON e.department_id = d.id GROUP BY e.department_id;

-- DELETE FROM departments WHERE id = 1

-- select id from departments where departments name 