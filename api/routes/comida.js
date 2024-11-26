require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { query } = require("../db");
const authenticateJWT = require("../middleware/middleware");

router.get("/", (req, res) => {
    const sql = `SELECT food_id,pet_id,name,date_format(foods.feeding_date,'%d/%m/%Y') as feeding_date, DATE_FORMAT(foods.feeding_time,'%H:%i') AS feeding_time FROM foods  `;

    query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal server error.");
        }

        return res.json(results);
    });
});


router.get("/contar/:id", (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS total FROM foods where pet_id=?`;

    query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        // Enviar el resultado de la cuenta como respuesta JSON
        return res.json({ total: results[0].total });
    });
});

router.post("/create", (req, res) => {
    const { pet_id, name, feeding_date, feeding_time } = req.body;

    const sql =
        `INSERT INTO foods(pet_id,name,feeding_date,feeding_time, status_id) VALUES (?, ?, ?, ?, ?)`;
    query(sql, [pet_id, name, feeding_date, feeding_time, 1], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal server error.");
        }

        return res.json({ message: "Salud creado exitosamente.", results });
    });
});

router.patch("/update", (req, res) => {
    const { pet_id, name, feeding_date, feeding_time, food_id } = req.body;
    console.log(req.body)
    const sql = 'UPDATE foods SET pet_id=?,name=?,feeding_date=?,feeding_time=?,status_id=? WHERE food_id = ?';

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
