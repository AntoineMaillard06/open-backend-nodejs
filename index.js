require('module-alias/register');

const express = require('express');
const app = express();

// Middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

const routes = require('@routes/index');

app.use('/', routes);

// App listening port

const port = 3000;

app.listen(port, () => {
  console.log(`App is started on port: ${port}`);
});
