// db.js

const mysql = require("mysql2");

const config = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "huellitas",
};

let connection;

function handleDisconnect() {
  connection = mysql.createConnection(config);

  connection.connect((err) => {
    if (err) {
      console.error("Error al conectarse a la base de datos:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  connection.on("error", (err) => {
    console.error("Error en la base de datos:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();

function query(sql, values, callback) {
  if (connection.state === "disconnected") {
    handleDisconnect();
  }

  connection.query(sql, values, callback);
}

module.exports = { query };
