# Write your MySQL query statement below

SELECT weather.id AS 'Id'

FROM weather JOIN weather w on DATEDIFF(weather.recordDate, w.recordDate) = 1
  AND weather.Temperature > w.Temperature
  
