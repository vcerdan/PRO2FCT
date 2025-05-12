const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/hola', (req, res) => {
  res.json({ mensaje: '¡Hola desde el backend!' });
});

app.listen(PORT, () => {
  console.log(`✅ Backend activo en http://localhost:${PORT}`);
});
