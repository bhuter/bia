const express = require("express");
const cors = require("cors");
const session = require("express-session");
const { Client } = require("pg");
const bcrypt = require('bcrypt');

const app = express();

// Create PostgreSQL connection
const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123",
    database: "bia"
});

client.connect();
app.use(cors());
app.use(express.json());
app.use(session({
    secret: "250781121117", // Change this to your actual secret key
    resave: false,
    saveUninitialized: false,
}));



// Register a new user
app.post("/register", async (req: any, res: any) => {
    const { name, phone, email, password, confirm } = req.body;

    // Input validation
    if (!name || !phone || !email || !password || !confirm) {
        return res.status(400).json({ message: "All fields are required." });
    }

    if (password !== confirm) {
        return res.status(400).json({ message: "Passwords do not match." });
    }

    try {
        // Check for existing users with the same phone or email
        const checkUserSql = `
            SELECT * FROM users WHERE phone = $1 OR email = $2
        `;
        const checkUserValues = [phone, email];
        const existingUserResult = await client.query(checkUserSql, checkUserValues);

        if (existingUserResult.rows.length > 0) {
            return res.status(400).json({ message: "Phone or email already exists." });
        }

        // Set default values for role, photo, status, reference, etc.
        const role = 'user'; // default role
        const photo = ''; // default empty photo or default image URL
        const status = 'active'; // or other status like 'pending' if needed
        const reference = ''; // If there's no reference provided, leave it empty
        const createdAt = new Date(); // current date
        const dueAt = null; // or calculate a due date if applicable

        // Hash the password
        const saltRounds = 10; // Adjust as needed (10 is a good balance between security and performance)
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insert user into the database with the hashed password
        const sql = `
            INSERT INTO users (name, phone, email, password, role, photo, created_at, due_at, status, reference)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *
        `;
        const values = [name, phone, email, hashedPassword, role, photo, createdAt, dueAt, status, reference];

        const result = await client.query(sql, values);

        return res.status(201).json({ message: "User registered successfully!", user: result.rows[0] });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: "Error: " + error.message });
        }
        return res.status(500).json({ message: "Unknown error occurred." });
    }
});
function generateSessionId() {
    const timestamp = Date.now().toString(36); // Get the current timestamp in base 36
    const randomNum = Math.random().toString(36).substring(2, 10); // Generate a random number in base 36
    return `${timestamp}-${randomNum}`; // Combine them
}

app.post("/login", async (req: any, res: any) => {
    const { userName, password } = req.body;

    if (!userName || !password) {
        return res.status(400).json({ message: "Both fields are required." });
    }

    try {
        const sql = "SELECT * FROM users WHERE email = $1 OR phone = $1";
        const result = await client.query(sql, [userName]);
        const user = result.rows[0];

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        const sessionId = generateSessionId(); // Use your session ID generation function
        const insertSql = "INSERT INTO sessions (user_id, session_id) VALUES ($1, $2) RETURNING *";
        await client.query(insertSql, [user.id, sessionId]);

        // Send response with user data and session ID
        return res.status(200).json({
            message: "Login successful!",
            user: {
                id: user.id,
                name: user.name,
                session_id: sessionId,
            }
        });
    } catch (error) {
        return res.status(500).json({ message: "Error: " + (error instanceof Error ? error.message : "Unknown error occurred.") });
    }
});



// Logout user
app.post("/logout", async (req: any, res: any) => {
    const sessionId = req.body.session_id; // Expecting the session ID from the client

    if (!sessionId) {
        return res.status(400).json({ message: "No session ID provided." });
    }

    try {
        // Update the session's logout date
        const updateSql = "UPDATE sessions SET logout_date = NOW() WHERE session_id = $1 RETURNING *";
        const result = await client.query(updateSql, [sessionId]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Session not found." });
        }

        return res.status(200).json({ message: "Logout successful." });
    } catch (error) {
        return res.status(500).json({ message: "Error: " + (error instanceof Error ? error.message : "Unknown error occurred.") });
    }
});



app.listen(5000, () => {
    console.log("Server is running");
});
