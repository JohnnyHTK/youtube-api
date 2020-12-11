
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, './HTML/')));

app.listen(8080);

app.get('/', (res) => {
  console.log("teste")
});

