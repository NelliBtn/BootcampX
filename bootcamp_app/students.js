const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohort = process.argv.slice(2)[0];
const limit = process.argv.slice(2)[1];

pool.query(`
SELECT students.id, students.name as student, cohorts.name as cohort
FROM students
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name LIKE '%${cohort}%'
LIMIT ${limit};
`)

  // .then(res => {
  //   console.log(res);
  // })
  // .catch(err => console.error('query error', err.stack));

  .then(res => {
    res.rows.forEach(result => {
      console.log(`${result.student} has an id of ${result.id} and was in the ${result.cohort} cohort`);
    })
  })
  .catch(err => console.error('query error', err.stack));