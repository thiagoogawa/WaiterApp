import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';

import { router } from './router.js';

mongoose.connect('mongodb://localhost:27017/waiterapp')
  .then(() => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error('Erro ao conectar no mongodb:', err));
