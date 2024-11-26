const express = require("express");
const { query } = require("../db");
const  authenticateJWT  = require("../middleware/middleware");
const router = express.Router();
router.get("/", authenticateJWT, (req, res) => {
    const userId = req.user.id;
    const sql = "SELECT * FROM Places WHERE user_id = ?";
    query(sql, [userId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error interno del servidor." });
        }
        return res.json(results);
    });
});
router.post("/register", authenticateJWT, (req, res) => {
    const { name, address, phone, website, horario, lat, lng, image } = req.body;
    const userId = req.user.id;
    if (!name || !lat || !lng) {
        return res.status(400).json({ message: "Los campos name, lat y lng son obligatorios." });
    }
    const sql =
        "INSERT INTO Places (name, address, phone, website, horario, lat, lng, image, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    query(sql, [name, address, phone, website, horario, lat, lng, image, userId], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error interno del servidor." });
        }
        return res.status(201).json({ message: "Lugar registrado exitosamente." });
    });
});
router.delete("/:id", authenticateJWT, (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const sql = "DELETE FROM Places WHERE id = ? AND user_id = ?";
    query(sql, [id, userId], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Error interno del servidor." });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Lugar no encontrado o no autorizado." });
        }
        return res.status(200).json({ message: "Lugar eliminado correctamente." });
    });
});
module.exports = router;