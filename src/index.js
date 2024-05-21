const express = require("express");
const bodyParser = require("body-parser");
/** esta libreria nos sirve para conectar expres son reactsss */
const cors = require("cors");
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/desarrolloweb')

const apiKeyMiddleware = require("./middleware/apiKey");
const { errorHandler, notFoundHandler } = require("./utils/errorHandler");
const goalRoutes = require("./routes/goalRoutes");
const taskRoutes = require("./routes/taskRoutes");
const logger = require("./config/logger");

const app = express();
/** para cambiar el puerto */
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
/** esta instancia no ayuda a que todos usen cors dentro de la app */
app.use(cors());
app.use(apiKeyMiddleware);

console.log("Setting up routes...");
app.use("/api/goals", goalRoutes);
app.use("/api/tasks", taskRoutes);
console.log("Routes set up.");

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Corriendo en el Puerto ${PORT}`);
});
