const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.get('/user', (req, res) => {
  res.json({ data: { name: 'Raz' } });
});

app.use('/', (res, res) => {
  res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});
app.listen(3000, () => {
  console.log('Listening...');
});
