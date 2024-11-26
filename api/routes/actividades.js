require('dotenv').config();

const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { query } = require("../db");
const authenticateJWT = require('../middleware/middleware');

router.get("/", (req, res) => {
    const sql = `SELECT a.activity_id,a.pet_id,a.name,p.name AS place_name, date_format(a.activity_date,'%d/%m/%Y') as activity_date, date_format(a.activity_time,'%H:%i') as activity_time FROM activities a JOIN places p ON a.place_id = p.place_id where pet_`;
    query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json(results);
    });
})

router.get("/contar/:id", (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(*) AS total FROM activities where pet_id=?`;

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

    const { pet_id, name, place_id, activity_date, activity_time } = req.body;

    const sql = `INSERT INTO activities(pet_id,name,place_id,activity_date,activity_time, status_id) VALUES (?, ?, ?, ?, ?, ?)`;
    query(sql, [pet_id, name, place_id, activity_date, activity_time, 1], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json({ message: 'Actividad creada exitosamente.', results });
    });
})

router.patch("/update", (req, res) => {
    const { pet_id, name, place_id, activity_date, activity_time, activity_id } = req.body;
    console.log(req.body)
    const sql = 'UPDATE activities SET pet_id = ?, name = ?, place_id = ?, activity_date = ?, activity_time = ?, status_id = ? WHERE activity_id = ?';

    query(sql, [pet_id, name, parseInt(place_id), activity_date, activity_time, 1, activity_id], (err, results) => {
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

    const sql = `DELETE FROM activities WHERE activity_id=?`;
    query(sql, [activity_id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json({ message: 'Actividad eliminada exitosamente.', results });
    });
})

module.exports = router