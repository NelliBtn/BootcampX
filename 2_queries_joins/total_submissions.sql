SELECT students.name as student, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON students.id = student_id
-- students are currently enrolled
WHERE students.end_date IS NULL
-- groups data by column to get each individual student
GROUP BY students.name
-- HAVING is like WHERE but for aggregated data
-- evaluated before SELECT so we can't use alias
HAVING count(assignment_submissions.*) < 100;