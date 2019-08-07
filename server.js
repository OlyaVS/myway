const fs = require('fs');
const express = require('express');

const app = express();
const port = '3000';
app.set('port', port);
app.use(express.json(), express.urlencoded({ extended: true }));

const state = JSON.parse(fs.readFileSync('./api/state.json'));

app.get('/', (request, response) => {
  response.send('Hello, Server!');
});

app
  .route('/route')
  .get(getData)
  .post(addItem)
  .put(sortItems);

app
  .route(`/route/:id`)
  .patch(updateItem)
  .delete(deleteItem);

function getData(request, response) {
  response
    .status(200)
    .type('json')
    .send(state)
    .end();
}

function addItem() {}

function sortItems() {}

function updateItem() {}

function deleteItem() {}

function listening(error) {
  error ? console.log(error) : console.log(`Server is listening: http://localhost:${port}`);
}

app.listen(port, listening);
