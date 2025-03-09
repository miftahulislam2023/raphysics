const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL Connection
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "raphysics",
    password: "admin",
    port: 5432,
});

// Route to handle form submission
app.post("/admit-student", async (req, res) => {
    const { name, mobile, fathersName, mothersName, class: studentClass, email } = req.body;

    try {
        const result = await pool.query(
            "INSERT INTO students (name, mobile, fathers_name, mothers_name, class, email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [name, mobile, fathersName, mothersName, studentClass, email]
        );
        res.status(201).json({ message: "Student admitted successfully", student: result.rows[0] });
    } catch (error) {
        console.error("Error inserting student:", error);
        res.status(500).json({ error: "Failed to admit student" });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
