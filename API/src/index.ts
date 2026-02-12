import express from 'express';

const app = express();
const port = 3001;

app.get('/', (_, res) => {
  console.log('REQ RECEBIDA');
  res.send('API funcionando 🚀');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`⚙️ Server running → http://localhost:${port}`);
});

