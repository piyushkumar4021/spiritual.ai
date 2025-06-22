import express from 'express';
const app = express();

app.get('/', (_, res) => {
  res.send('Spiritual.ai');
});

app.listen(3000, () => console.log('Listening on Port 3000...'));
