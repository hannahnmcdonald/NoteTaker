//  Requirements
const express = require('express');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// Initialize App + Create Port
const app = express();
const PORT = process.env.PORT || 3001;

// Set Up Middleware
app.use(express.static('public'));
// app.use('/api', apiRoutes);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/', htmlRoutes);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);
