const { neon } = require("@neondatabase/serverless");
require("dotenv").config();

let sql;
if (process.env.DATABASE_URL) {
  sql = neon(process.env.DATABASE_URL);
} else {
  sql = {
    query: async () => {
      throw new Error(
        "DATABASE_URL is not set. Add it to your .env file, then restart the server."
      );
    },
  };
}

module.exports = { sql };
