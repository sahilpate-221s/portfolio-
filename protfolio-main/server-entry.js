import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import handler from './api/server.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// CORS headers - optional setup, improve security as needed
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Serve frontend static files from 'dist' directory (build output)
app.use(express.static(path.join(__dirname, 'dist')));

// API Route for form submission, replicated from server.js handler
app.all('/api/contact', (req, res) => {
  handler(req, res); 
});

// Fallback to serve index.html for SPA routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
