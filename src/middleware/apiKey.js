const API_KEY = 'pato';

const apiKey = (req, res, next) => {
    const apiKey = req.header('Authorization');
    console.log('Key Recibido:', apiKey);  
    if (apiKey !== API_KEY) {
        console.log('key incorrecta');  
        return res.status(401).json({ error: 'API Key Incorrecta' });
    }
    next();
};
module.exports = apiKey;
