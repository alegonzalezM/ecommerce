
const mysql = require("mysql2");

// Conexión
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "dals"
});

// Conectar
connection.connect(err => {
  if (err) throw err;
  console.log("Conectado a MySQL");

  connection.query("SELECT * FROM productos", (err, results) => {
    if (err) throw err;
    console.log(results);
    connection.end();
  });
});
