const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
    logger.error(err.message);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
};

const notFoundHandler = (req, res, next) => {
    res.status(404).json({ error: 'Recurso no encontrado' });
};

module.exports = {
    errorHandler,
    notFoundHandler
};
