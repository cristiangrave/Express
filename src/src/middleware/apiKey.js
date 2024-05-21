const API_KEY = "passaword";

const apiKey = (req, res, next) => {
  const apiKey = req.header("Authorization");
  console.log("Received API Key:", apiKey); // Agrega este log
  if (apiKey !== API_KEY) {
    console.log("API key incorrecta"); // Agrega este log
    return res.status(401).json({ error: "API key incorrecta" });
  }
  next();
};

module.exports = apiKey;
