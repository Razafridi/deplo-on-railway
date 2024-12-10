const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/user', (req, res) => {
  res.json({ data: { name: 'Raz' } });
});

app.listen(3000, () => {
  console.log('Listening...');
});
