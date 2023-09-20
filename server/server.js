const express = require('express');
const axios = require('axios');
const cors = require("cors")
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.OPENWEATHERMAP_API_KEY;
app.use(express.json());


app.use(cors({
  origin: 'http://localhost:4200'
}))

app.get('/weather', async (req, res) => {
  try {
    const city = req.query.city;
    const weatherResponse = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    res.json(weatherResponse.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'An error occurred while fetching weather data.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
