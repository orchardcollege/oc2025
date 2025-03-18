const express = require('express');
const dotenv = require('dotenv');
const computerRoutes = require('./routes/computerRoutes'); // Import the new route

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.use('/api', computerRoutes); // Make sure the API uses the route

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
