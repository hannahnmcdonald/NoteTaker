//  Requirements
const express = require('express');

// Initialize App + Create Port
const app = express();
const PORT = 3001;


// Set Up Middleware
app.use(express.static('public'));



// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
