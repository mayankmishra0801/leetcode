# Write your MySQL query statement below

select patient_id, patient_name, conditions
FROM Patients
WHERE conditions REGEXP '(^| )DIAB1';