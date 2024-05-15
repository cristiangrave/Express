const API_KEY = 'chanchitoFeliz';

const apiKey = (req, res, next) => {
    const apiKey = req.header('Authorization');
    console.log('Api Key Recibido:', apiKey);  // Agrega este log
    if (apiKey !== API_KEY) {
        console.log('API key incorrecta');  // Agrega este log
        return res.status(401).json({ error: 'API Key Incorrecta' });
    }
    next();
};
module.exports = apiKey;
