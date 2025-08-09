import express from 'express';
import cors from 'cors';
import routes from './routes/routes.js';
import 'dotenv/config';

const app = express();
app.use(cors());

// Logging
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.originalUrl}`);
    next();
});

app.use(routes);

// ✅ Export handler untuk Vercel
export default app;
