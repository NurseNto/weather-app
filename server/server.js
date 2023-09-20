const express = require('express');
const axios = require('axios');
const cors = require("cors");
const pool = require('./db'); // Import the database connection from db.js
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4500;
const apiKey = process.env.OPENWEATHERMAP_API_KEY;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Create a new Router for city-related routes
const cityRouter = express.Router();
app.use('/cities', cityRouter);

// Endpoint to add a new city
cityRouter.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'City name is required' });
    }

    const newCity = await pool.query('INSERT INTO cities (name) VALUES ($1) RETURNING *', [name]);
    res.json(newCity.rows[0]);
  } catch (error) {
    console.error('Error adding city:', error);
    res.status(500).json({ error: 'An error occurred while adding the city' });
  }
});

// Endpoint to retrieve the list of saved cities
cityRouter.get('/', async (req, res) => {
  try {
    const cities = await pool.query('SELECT * FROM cities');
    res.json(cities.rows);
  } catch (error) {
    console.error('Error retrieving cities:', error);
    res.status(500).json({ error: 'An error occurred while retrieving cities' });
  }
});

// Endpoint to update a city by ID
cityRouter.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'City name is required' });
    }

    const updatedCity = await pool.query('UPDATE cities SET name = $1 WHERE id = $2 RETURNING *', [name, id]);
    res.json(updatedCity.rows[0]);
  } catch (error) {
    console.error('Error updating city:', error);
    res.status(500).json({ error: 'An error occurred while updating the city' });
  }
});

// Endpoint to delete a city by ID
cityRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCity = await pool.query('DELETE FROM cities WHERE id = $1 RETURNING *', [id]);
    res.json(deletedCity.rows[0]);
  } catch (error) {
    console.error('Error deleting city:', error);
    res.status(500).json({ error: 'An error occurred while deleting the city' });
  }
});

// Weather endpoint
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
