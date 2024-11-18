require('dotenv').config();

const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { query } = require("../db");
const authenticateJWT = require('../middleware/middleware');

router.post("/", (req, res) => {
    const { id } = req.body;
    const sql = `SELECT * FROM Health where pet_id = ?`;
    query(sql, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json(results[0]);
    });
})

router.post("/create", (req, res) => {
    const { pet_id, health_type_id, name, place_id, event_date, event_time } = req.body;

    const sql = `INSERT INTO health(pet_id,health_type_id,name,place_id,event_date,event_time, status_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    query(sql, [pet_id, health_type_id, name, place_id, event_date, event_time, 1], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json({ message: 'Salud creado exitosamente.', results });
    });
})

module.exports = router