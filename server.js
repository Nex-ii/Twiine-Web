const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
