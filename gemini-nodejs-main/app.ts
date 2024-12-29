import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; // CORS paketi eklendi
import { generateResponse } from "./controllers";

dotenv.config();

const app = express();
const port = process.env.PORT;

// CORS middleware
app.use(cors()); // Varsayılan ayarlar tüm kaynaklara izin verir, gerekirse özelleştirilebilir
app.use(bodyParser.json());

app.post("/generate", generateResponse);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

