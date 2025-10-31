
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
