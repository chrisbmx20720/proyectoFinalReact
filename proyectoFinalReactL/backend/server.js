import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors'; // Añadido para CORS

// Configuración para obtener el directorio actual en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 5000;

// Middleware CORS
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'src/uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Ruta para subir la imagen
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No se subió ningún archivo.' });
  }
  res.status(200).json({ message: 'Imagen subida con éxito', filename: req.file.filename });
});


// Añade esta ruta a tu archivo server.js
app.get('/images', (req, res) => {
  const uploadPath = path.join(__dirname, '/backend/src/uploads');
  fs.readdir(uploadPath, (err, files) => {
    if (err) {
      return res.status(500).send('Error al leer el directorio de imágenes.');
    }
    
    const images = files.map(file => ({
      id: file, // O un ID único si lo prefieres
      filename: file,
      title: file, // Puedes cambiar esto a un título más descriptivo si lo deseas
      alt_text: '' // Puedes dejarlo vacío o agregar un texto alternativo si lo prefieres
    }));

    res.json(images);
  });
});


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});




