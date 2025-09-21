
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRouter from './routes/auth-routes.js';
import urlRouter from './routes/url-routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use("/api/urls", urlRouter);

//Code goes here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});