//  Requirements
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize App
const app = express();

// Create Port
const PORT = process.env.PORT || 3001;

// Set Up Middleware
app.use(express.static('public'));
// Parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.urlencoded({
  extended: true
}));

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
