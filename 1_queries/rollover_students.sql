SELECT students.name AS students_name,
 students.start_date AS students_start_date,
 cohorts.name AS cohorts_name,
 cohorts.start_date AS cohorts_start_date
 FROM students 
 JOIN cohorts 
 ON cohort_id = cohorts.id
 WHERE cohorts.start_date != students.start_date
 ORDER BY cohorts.start_date;
