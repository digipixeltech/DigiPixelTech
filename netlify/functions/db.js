const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { name, email, projectType, projectScope, timeline, budget, availability, details } =
      JSON.parse(event.body);

    const result = await pool.query(
      `INSERT INTO contact_form
      (name,email,projectType,projectScope,timeline,bughet,availability,details)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,
      [name, email, projectType, projectScope, timeline, budget, availability, details]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, inserted: result.rows[0] }),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};