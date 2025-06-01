const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname)); // serve all files in current directory

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
