const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv.slice(2)[0];
const limit = process.argv.slice(2)[1];
const values = [`%${cohort}%`, limit]; // save values separately to avoid SQL injections

// use $1, $2 etc signs to sanitize the code
pool.query(`
SELECT students.id, students.name as student, cohorts.name as cohort
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE $1 
LIMIT $2
`, values) // pass them as a second parameter



  .then(res => {
    res.rows.forEach(result => {
      console.log(`${result.student} has an id of ${result.id} and was in the ${result.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));