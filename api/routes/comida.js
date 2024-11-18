require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { query } = require("../db");
const authenticateJWT = require("../middleware/middleware");
const secret = process.env.JWT_SECRET;

router.post("/", (req, res) => {
    const { id } = req.body;
    const sql = "SELECT * FROM foods where pet_id = ?";
    query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal server error.");
        }

        return res.json(results[0]);
    });
});

router.post("/create", (req, res) => {
    const { pet_id, name, feeding_date, feeding_time } = req.body;

    const sql =
        "INSERT INTO foods(pet_id,name,feeding_date,feeding_time, status_id) VALUES (?, ?, ?, ?, ?)";
    query(sql, [pet_id, name, feeding_date, feeding_time, 1], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal server error.");
        }

        return res.json({ message: "Salud creado exitosamente.", results });
    });
});

router.patch("/update", (req, res) => {
    const { food_id, pet_id, name, feeding_date, feeding_time } = req.body;

    const sql = `UPDATE foods (pet_id,name,feeding_date,feeding_time,status_id) SET (?,?,?,?,?,?) WHERE food_id = ?`;

    query(sql, [pet_id, name, feeding_date, feeding_time, 1, food_id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: 'Internal server error',
                details: err.message
            });
        }

        return res.json({
            message: "Alimentación actualizada exitosamente.",
            results
        });
    });
});

router.delete("/delete", (req, res) => {
    const { food_id } = req.body;

    const sql = `DELETE FROM foods WHERE food_id=?`;
    query(sql, [food_id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal server error.");
        }

        return res.json({ message: "Alimentacion eliminado exitosamente.", results });
    });
});

module.exports = router;
