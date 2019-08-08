const fs = require('fs');
const express = require('express');

const app = express();
const port = '3000';
app.set('port', port);
app.use(express.json(), express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.send('Hello, Server!');
});

app
  .route('/route')
  .get(getData)
  .put(sortItems)
  .post(addItem);

app
  .route('/route/:id')
  .patch(updateItem)
  .delete(deleteItem);

function getData(request, response) {
  const state = JSON.parse(fs.readFileSync('./api/state.json'));

  response
    .status(200)
    .type('json')
    .send(state)
    .end();
}

function addItem() {}

function sortItems(request, response) {
  const state = JSON.parse(fs.readFileSync('./api/state.json'));
  const dragItem = state.route[request.body.dragIndex];
  state.route.splice(request.body.dragIndex, 1);
  state.route.splice(request.body.hoverIndex, 0, dragItem);
  updateStateFile(state);
  response
    .status(200)
    .type('json')
    .send(state.route)
    .end();
}

function updateStateFile(state) {
  const data = JSON.stringify(state, null, 2);
  fs.writeFile('./api/state.json', data, error => {
    if (error) {
      console.log(error);
    }
  });
}

function updateItem() {}

function deleteItem() {}

function listening(error) {
  error ? console.log(error) : console.log(`Server is listening: http://localhost:${port}`);
}

app.listen(port, listening);
