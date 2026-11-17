# Write your MySQL query statement below
select MAX(salary) as secondHighestSalary from employee where salary < (select MAX(salary) from employee);