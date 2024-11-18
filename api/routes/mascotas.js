require('dotenv').config();

const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { query } = require("../db");
const authenticateJWT = require('../middleware/middleware');
const secret = process.env.JWT_SECRET;

router.post("/", (req, res) => {
  const { user_id } = req.body;
  const sql = 'SELECT * FROM Pets where user_id = ?';

  query(sql, [user_id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal server error.');
    }

    return res.json(results[0]);
  });
})

router.post("/register", (req, res) => {
  const { user_id, name, sex, species, breed, color, characteristics } = req.body;

  const sqlMascota = 'INSERT INTO Pets (user_id, name, sex, species, breed, color, characteristics) VALUES (?, ?, ?, ?, ?, ?, ?)';

  query(sqlMascota, [user_id, name, sex, species, breed, color, characteristics], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal server error.');
    }

    return res.json({ message: 'Mascota creada exitosamente.' });
  });


})

router.patch("/update", (req, res) => {
  const { id, name, sex, species, breed, color, characteristics } = req.body;

  const sqlMascota = 'UPDATE Pets (name, sex, species, breed, color, characteristics) xSET (?, ?, ?, ?, ?, ?, ?) WHERE id = ?';

  query(sqlMascota, [id, name, sex, species, breed, color, characteristics], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal server error.');
    }

    return res.json({ message: 'Mascota actualizada exitosamente.' });
  });


})

router.delete("/delete", (req, res) => {
  const { id } = req.body;

  const sqlMascota = 'DELETE FROM Pets WHERE id = ?';

  query(sqlMascota, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal server error.');
    }

    return res.json({ message: 'Mascota eliminada exitosamente.' });
  });
})

module.exports = router;