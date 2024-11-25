require('dotenv').config();

const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { query } = require("../db");
const { authenticateJWT } = require('../middleware/middleware');
const secret = process.env.JWT_SECRET;

// POST endpoint para iniciar sesión
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Correo y contraseña requeridos.' });
  }

  const sql = 'SELECT * FROM Users WHERE email = ?';

  query(sql, [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error interno del servidor.' });
    }

    if (results.length > 0) {
      const user = results[0];

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Correo o contraseña incorrectos.' });
      }

      // Generate JWT
      const token = jwt.sign({ id: user.user_id, name: user.name, rol: user.rol_id }, secret, { expiresIn: '1h' });
      delete user.password;
      const username = user.name;
      const id = user.user_id;

      return res.json({ 
        token, 
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // Tiempo de expiración del token
        username, 
        id 
      });
    } else {
      return res.status(401).json({ message: 'Correo o contraseña incorrectos.' });
    }
  });
});

// Endpoint para validar el token
router.get("/validate", authenticateJWT, (req, res) => {
  return res.json({ user: req.user });
});

// Endpoint para registrar un usuario
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
  query(sql, [name, email, hashedPassword], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error interno del servidor.' });
    }

    return res.json({ message: 'Usuario creado exitosamente.', results });
  });
});

// Endpoint para eliminar un usuario
router.delete("/delete", authenticateJWT, async (req, res) => {
  const { id, password } = req.body;

  if (!id || !password) {
    return res.status(400).json({ message: 'ID y contraseña requeridos.' });
  }

  // Verifica que la contraseña sea válida antes de eliminar el usuario
  const sqlSelect = 'SELECT * FROM Users WHERE user_id = ?';
  query(sqlSelect, [id], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error interno del servidor.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta.' });
    }

    const sqlDelete = 'DELETE FROM Users WHERE user_id = ?';
    query(sqlDelete, [id], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error interno del servidor.' });
      }

      return res.json({ message: 'Usuario eliminado exitosamente.' });
    });
  });
});

module.exports = router;
