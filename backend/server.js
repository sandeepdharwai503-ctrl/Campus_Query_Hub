const path = require("path");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const queryRoute = require("./routes/query");
const customQueryRoute = require("./routes/customQuery");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/query", queryRoute);
app.use("/api/custom-query", customQueryRoute);

app.get("/api/health", (_req, res) =>
  res.json({ status: "ok", time: new Date().toISOString() })
);

const frontendDir = path.join(__dirname, "..", "frontend");
app.use(express.static(frontendDir));

app.get(/^\/(?!api\/).*/, (_req, res) => {
  res.sendFile(path.join(frontendDir, "index.html"));
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 5050;
  app.listen(PORT, () => {
    console.log(`Campus Query Hub running -> http://localhost:${PORT}`);
  });
}
