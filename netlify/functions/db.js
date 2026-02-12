const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

exports.handler = async function (event) {
  try {
    if (event.httpMethod === "POST") {
      const {
        name,
        email,
        projectType,
        projectScope,
        timeline,
        budget,
        availability,
        details
      } = JSON.parse(event.body);

      const result = await pool.query(
        `INSERT INTO contact_form 
        (name, email, projectType, projectScope, timeline, budget, availability, details)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
        RETURNING *`,
        [
          name,
          email,
          projectType,
          projectScope,
          timeline,
          budget,
          availability,
          details
        ]
      );

      // const result = await pool.query(
      //   `INSERT INTO contact_form 
      //   (name, email, projectType, projectScope, timeline, budget, availability, details)
      //   VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      //   RETURNING *`,
      //   [
      //     'form.name',
      //     'form.email',
      //     'form.projectType',
      //     'form.projectScope',
      //     'form.timeline',
      //     'form.budget',
      //     'form.availability',
      //     'form.details'
      //   ]
      // );

      return {
        statusCode: 200,
        body: JSON.stringify(result.rows[0]),
      };
    }

    if (event.httpMethod === "GET") {
      const result = await pool.query("SELECT * FROM contact_form");

      return {
        statusCode: 200,
        body: JSON.stringify(result.rows),
      };
    }

    return { statusCode: 405 };

  } catch (error) {
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};