import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

export default app;