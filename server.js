const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.post('/submit', (req, res) => {
  const userChoice = req.body.choice;
  console.log(`User selected: ${userChoice}`);
  res.status(200).send('Choice received!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
