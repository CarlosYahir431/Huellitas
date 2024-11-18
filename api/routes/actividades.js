require('dotenv').config();

const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { query } = require("../db");
const authenticateJWT = require('../middleware/middleware');
const secret = process.env.JWT_SECRET;

router.post("/", (req, res) => {
    const { id } = req.body;
    const sql = 'SELECT * FROM activities where pet_id = ?';
    query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json(results[0]);
    });
})

router.post("/create", (req, res) => {
    const { pet_id, name, place_id, activity_date, activity_time } = req.body;

    const sql = 'INSERT INTO activities(pet_id,name,place_id,activity_date,activity_time, status_id) VALUES (?, ?, ?, ?, ?, ?)';
    query(sql, [pet_id, name, place_id, activity_date, activity_time, 1], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json({ message: 'Actividad creada exitosamente.', results });
    });
})

router.patch("/update", (req, res) => {
    const { pet_id, name, place_id, activity_date, activity_time } = req.body;

    const sql = `UPDATE activities  (pet_id, name, place_id, activity_date, activity_time, status_id) SET (?,?,?,?,?,?) WHERE activity_id = ?`;

    query(sql, [pet_id, name, place_id, activity_date, activity_time, 1,], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({
                error: 'Internal server error',
                details: err.message
            });
        }

        return res.json({
            message: 'Actividad actualizada exitosamente.',
            results
        });
    });
});

router.delete("/delete", (req, res) => {
    const { activity_id } = req.body;

    const sql = 'DELETE FROM activities WHERE activity_id=?';
    query(sql, [activity_id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json({ message: 'Actividad eliminada exitosamente.', results });
    });
})










module.exports = router