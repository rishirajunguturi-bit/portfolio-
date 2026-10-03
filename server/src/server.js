import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';
import { connectDB } from './config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Environment Variables from server/.env or root .env
dotenv.config({ path: path.resolve(__dirname, '../../.env') });
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
if (process.env.MONGODB_URI) {
  connectDB();
} else {
  console.warn('[Server Warning] MONGODB_URI environment variable is not defined. Please configure in .env');
}

// Start Express Server
const server = app.listen(PORT, () => {
  console.log(`[Server] Portfolio Express server listening on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`[Unhandled Rejection] ${err.message}`);
});
