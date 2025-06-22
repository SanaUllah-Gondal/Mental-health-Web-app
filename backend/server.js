// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const appointmentRoutes = require('./routes/appointments');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/appointments', appointmentRoutes);

const connectWithRetry = () => {
  console.log('Attempting MongoDB connection...');
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('✅ MongoDB connected successfully');
      app.listen(3000, () => console.log('🚀 Server running at http://localhost:3000'));
    })
    .catch(err => {
      console.error('❌ MongoDB connection error:', err.message);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();
