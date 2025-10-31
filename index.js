
import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json());


const peticiones = [
  { id: 1, titulo: "Ayuda con clases de inglés", descripcion: "Busco alguien que me ayude 1 hora a la semana." },
  { id: 2, titulo: "Pasear mascotas", descripcion: "Puedo cuidar y pasear perros en las tardes." },
  { id: 3, titulo: "Reparar bicicleta", descripcion: "Ofrezco ayuda con mecánica básica de bicicletas." }
];


app.get("/api/peticiones", (req, res) => {
  res.json(peticiones);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor backend de ejemplo corriendo en puerto ${PORT}`);
});

const app2 = express();
app2.use(cors());
app2.use(express.json());

const servicios = [
  { id: 1, nombre: "Clases de guitarra", descripcion: "Enseño guitarra básica los fines de semana." },
  { id: 2, nombre: "Reparación de computadoras", descripcion: "Puedo ayudarte a limpiar virus y optimizar tu PC." },
  { id: 3, nombre: "Traducciones", descripcion: "Traducción de textos inglés-español de forma profesional." }
];

app2.get("/api/servicios", (req, res) => {
  res.json(servicios);
});

const PORT2 = 4000;
app2.listen(PORT2, () => {
  console.log(`✅ API 2 corriendo en http://localhost:${PORT2}/api/servicios`);
});