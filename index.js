require('dotenv').config(); // Load environment variables before anything else
const app = require('./src/app'); // Import the app
const PORT = process.env.PORT || 8080; // Define the port

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
