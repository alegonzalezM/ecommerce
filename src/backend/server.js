import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const PORT = 3006;

console.log("🔥 Server arrancado en puerto 3006");

// Middleware
app.use(cors());
app.use(express.json()); // Permite recibir JSON en POST

// Conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",  // tu contraseña
  database: "dals"
});

db.connect(err => {
  if (err) {
    console.error("❌ Error de conexión a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL");
});

// GET: Obtener todos los productos
app.get("/api/articulos", (req, res) => {
  db.query("SELECT * FROM articulos", (err, results) => {
          if (err) {
              console.error("❌ Error en la consulta:", err);
              return res.status(500).json({ error: err.message });
          }
          res.json(results);
      });
});

// POST: Agregar un producto
// app.post("/api/articulos", (req, res) => {
//   const { codigo, name, price, description, image, stock } = req.body;

//   if (!codigo || !name || !price) {
//     return res.status(400).json({ error: "Faltan campos obligatorios" });
//   }

//   const query = "INSERT INTO articulos (codigo, name, price, description, image, stock) VALUES (?, ?, ?, ?, ?, ?)";
//   db.query(query, [codigo, name, price, description || "", image || "", stock || 0], (err, results) => {
//     if (err) {
//       console.error("❌ Error al insertar:", err);
//       return res.status(500).json({ error: err.message });
//     }
//     res.json({ message: "Producto agregado", id: results.insertId });
//   });
// });

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
