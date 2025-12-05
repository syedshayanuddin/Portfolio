const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// test endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// AI routes
app.use('/api/ai', aiRoutes);

module.exports = app;
