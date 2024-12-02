const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Enable CORS for the frontend (localhost:3000)
app.use(cors({
  origin: 'http://localhost:3000', // Adjust for production if necessary
  credentials: true,
}));

// Middleware to parse JSON request body
app.use(express.json());

// Root route handler (added for testing)
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Endpoint to forward requests to the external API
app.post('/task', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api-nodejs-todolist.herokuapp.com/task',
      req.body, // Forward the body of the request
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY', // Use your actual token here
          'Content-Type': 'application/json',
        },
      }
    );

    // Send the response back to the frontend
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error forwarding the request:', error);
    res.status(500).json({ message: 'Error forwarding the request' });
  }
});

// GET route to fetch tasks (this calls the API on the backend)
app.get('/task', async (req, res) => {
  try {
    const response = await axios.get('https://api-nodejs-todolist.herokuapp.com/task', 
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY', // Use your actual token here
          'Content-Type': 'application/json',

        },
      }
    );

    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('CORS server running on http://localhost:5000');
});
