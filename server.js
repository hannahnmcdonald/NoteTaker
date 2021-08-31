//  Requirements:
const express = require('express');

// Initialize App:
const app = express();
const PORT = 3001;

// Listen for connections:
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
