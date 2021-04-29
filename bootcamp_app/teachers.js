const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv.slice(2)[0];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${cohort || "JUL02"}%'
ORDER BY teachers.name;
`)
  .then(res => {
    res.rows.forEach(result => {
      console.log(`${result.cohort}: ${result.teacher}`);
    })
  })
  .catch(err => console.error('query error', err.stack));