const express = require("express");
const router = express.Router();
const { sql } = require("../db/db");

const QUERY = `
WITH overall AS (
    SELECT AVG(m.marks / d.total * 100) AS avg_percent
    FROM marks m
    JOIN dist d ON d.rid = m.rid AND d.hid = m.hid
)
SELECT
    f.name,
    AVG(m.marks / d.total * 100) AS faculty_avg_percent,
    o.avg_percent AS overall_avg_percent,
    CASE
        WHEN AVG(m.marks / d.total * 100) > o.avg_percent THEN 'Lenient'
        ELSE 'Strict'
    END AS grading
FROM marks m
JOIN dist d ON d.rid = m.rid AND d.hid = m.hid
JOIN recap r ON r.rid = m.rid
JOIN faculty f ON f.fid = r.fid
CROSS JOIN overall o
GROUP BY f.name, o.avg_percent
ORDER BY faculty_avg_percent DESC;
`;

router.get("/", async (_req, res) => {
  res.set("Cache-Control", "no-store");
  try {
    const results = await sql.query(QUERY);
    const columns = results.length > 0 ? Object.keys(results[0]) : [];
    res.json({ success: true, columns, data: results, count: results.length });
  } catch (err) {
    console.error("Custom query error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
