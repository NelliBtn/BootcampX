SELECT day, count(assignments.*) as total
FROM assignments
GROUP BY day
-- HAVING count(*) >= 10
ORDER BY day;