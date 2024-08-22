const express = require('express');
const app = express();
const port = 3001;
const routes = require('./routes/index');


// Configura el middleware para parsear JSON
app.use(express.json());

app.use('/', routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));

