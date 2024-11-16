require('dotenv').config();

const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const { query } = require("../db");
const authenticateJWT = require('../middleware/middleware');
const secret = process.env.JWT_SECRET;

// POST endpoint para iniciar sesión
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Correo y contraseña requeridos.');
  }

  const sql = 'SELECT * FROM Users WHERE email = ?';

  query(sql, [email], async (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal server error.');
    }

    if (results.length > 0) {
      const user = results[0];

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send('Correo o contraseña incorrectos.');
      }

      // Generate JWT
      const token = jwt.sign({ id: user.user_id, name: user.name, rol: user.rol_id }, secret, { expiresIn: '1h' });
      delete user.password;
      const username = user.name;
      const id = user.user_id;
      //add expiration time to the respone
      return res.json({ token, exp: Math.floor(Date.now() / 1000) + (60 * 60), username, id });
    } else {
      return res.status(401).send('Correo o contraseña incorrecto.');
    }
  });
});

router.get("/validate", authenticateJWT, (req, res) => {
  return res.json({ user: req.user });
})

router.post("/register", (req, res) => {
  const { email, password, name } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const sqlEmployee = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';

  query(sqlEmployee, [name, email, hashedPassword], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal server error.');
    }

    return res.json({ message: 'Usuario creado exitosamente.', results });
  });
})

router.delete("/delete", authenticateJWT, (req, res) =>{
  const { id, password } = req.body;

  const sql = 'DELETE FROM Users WHERE id = ?';
 //checar que la contra sea correcta y si lo es entonces eliminar el usuario

  query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal server error.');
    }

    return res.json({ message: 'Usuario eliminado exitosamente.' });
  });
})
module.exports = router;