const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
   {
      host: 'localhost',
      user: 'root',
      password: 'Sjeet2bang2000oct//QL',
      database: 'company'
   },
   console.log("Connected to the company database")
);

const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title AS role, departments.name AS department, roles.salary AS salary, managers.name AS managers
FROM employees
LEFT JOIN departments ON employees.department_id = departments.id
LEFT JOIN managers ON employees.manager_id = managers.id
LEFT JOIN roles ON employees.role_id = roles.id;`

db.query(sql, (err, rows) => {
   if (err) {
      console.log("ERROR OCCURED");
      return;
   }
   console.table(rows);
});

