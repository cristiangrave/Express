const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiKeyMiddleware = require('./middleware/apiKey');
const { errorHandler, notFoundHandler } = require('./utils/errorHandler');
const goalRoutes = require('./routes/goalRoutes');
const taskRoutes = require('./routes/taskRoutes');
const logger = require('./config/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(apiKeyMiddleware);

console.log('Setting up routes...');
app.use('/api/goals', goalRoutes);
app.use('/api/tasks', taskRoutes);
console.log('Routes set up.');

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Servidor corriendo en el puerto ${PORT}`);
});
