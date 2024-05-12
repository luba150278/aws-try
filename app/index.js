const express = require('express');
const app = express();
const PORT = process.env.APP_PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello AWS');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
