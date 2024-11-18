require('dotenv').config();

const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { query } = require("../db");
const authenticateJWT = require('../middleware/middleware');

router.get("/", (req, res) => {
    const sql = `SELECT 
        h.health_id, 
        h.pet_id, 
        ht.name AS type_name,
        h.name, 
        p.name AS place_name, 
        DATE_FORMAT(h.event_date, '%d/%m/%Y') AS event_date, 
        h.event_time
      FROM health h
      JOIN healthtypes ht ON h.health_type_id = ht.health_type_id
      JOIN places p ON h.place_id = p.place_id
`;
    query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json(results);
    });
})

router.get("/contar", (req, res) => {
    const sql = `SELECT COUNT(*) AS total FROM Health`;

    query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        // Enviar el resultado de la cuenta como respuesta JSON
        return res.json({ total: results[0].total });
    });
});


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

router.patch("/update", (req, res) => {
    const { health_id, pet_id, health_type_id, name, place_id, event_date, event_time } = req.body;

    const sql = `UPDATE health(pet_id,health_type_id,name,place_id,event_date,event_time, status_id) SET (?, ?, ?, ?, ?, ?, ?) WHERE health_id=?`;
    query(sql, [pet_id, health_type_id, name, place_id, event_date, event_time, 1, health_id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal server error.');
        }

        return res.json({ message: 'Salud actualizado exitosamente.', results });
    });
})

router.delete("/delete", (req, res) => {
    const { health_id } = req.body;

    const sql = `DELETE FROM health WHERE health_id=?`;
    query(sql, [health_id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal server error.");
        }

        return res.json({ message: "Salud eliminado exitosamente.", results });
    });
});


module.exports = router