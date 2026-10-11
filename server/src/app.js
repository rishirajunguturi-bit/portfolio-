import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middleware
const allowedOrigin = process.env.CLIENT_URL || 'https://portfolio-eicvxk8np-rishirajunguturi-7628s-projects.vercel.app/';

app.use(cors({
  origin: allowedOrigin,
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check / API Root
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Rishi Rajunguturi Portfolio Backend API is running.',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/contact', contactRoutes);

// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API Route ${req.originalUrl} not found.`
  });
});

// Centralized Error Handler
app.use(errorHandler);

export default app;
