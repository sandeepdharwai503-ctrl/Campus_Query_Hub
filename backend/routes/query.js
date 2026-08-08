const express = require("express");
const router = express.Router();
const { sql } = require("../db/db");

router.get("/", async (req, res) => {
  res.set("Cache-Control", "no-store");
  const query = req.query.q;

  if (!query || !query.trim()) {
    return res.status(400).json({ success: false, error: "Query is required. Use ?q=SELECT..." });
  }

  const trimmed = query.trim().toUpperCase();
  if (!trimmed.startsWith("SELECT") && !trimmed.startsWith("WITH")) {
    return res.status(400).json({
      success: false,
      error: "Only SELECT (and WITH … SELECT) queries are allowed.",
    });
  }

  try {
    const results = await sql.query(query);
    const columns = results.length > 0 ? Object.keys(results[0]) : [];
    res.json({ success: true, columns, data: results, count: results.length });
  } catch (err) {
    console.error("Raw query error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
