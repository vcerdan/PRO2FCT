const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000; // Puerto del servidor

app.use(cors()); // Permite solicitudes CORS desde cualquier origen
app.use(express.json());   // Permite el análisis de JSON en el cuerpo de las solicitudes

// Ruta de prueba
app.get('/api/hola', (req, res) => {
  res.json({ mensaje: '¡Hola desde tu servidor Node.js!' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js escuchando en http://localhost:${PORT}`);
});
