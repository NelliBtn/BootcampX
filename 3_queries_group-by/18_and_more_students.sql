SELECT cohorts.name, count(students.*) as total
FROM cohorts 
JOIN students ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
HAVING count(students.*) >= 18
ORDER BY total;