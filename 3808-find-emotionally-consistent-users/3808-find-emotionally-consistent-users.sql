# Write your MySQL query statement below
WITH reaction_counts AS (
    SELECT
        user_id,
        reaction,
        COUNT(*) AS reaction_count,
        SUM(COUNT(*)) OVER (PARTITION BY user_id) AS total_reactions
    FROM reactions
    GROUP BY user_id, reaction
),
ranked AS (
    SELECT *,
           ROW_NUMBER() OVER (
               PARTITION BY user_id
               ORDER BY reaction_count DESC
           ) AS rn
    FROM reaction_counts
)
SELECT
    user_id,
    reaction AS dominant_reaction,
    ROUND(reaction_count / total_reactions, 2) AS reaction_ratio
FROM ranked
WHERE rn = 1
  AND total_reactions >= 5
  AND reaction_count / total_reactions >= 0.60
ORDER BY reaction_ratio DESC, user_id ASC;