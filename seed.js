const { db, Vegetable, Gardener, Plot } = require('./model');

let veggieData = [
  {
    name: 'Carrot',
    color: 'Orange',
    plantedOn: Date.now(),
  },
  {
    name: 'Tomato',
    color: 'Red',
    plantedOn: Date.now(),
  },
  {
    name: 'Green Pepper',
    color: 'Green',
    plantedOn: Date.now(),
  },
];

let gardenerData = [{}, {}];

// etc.

db.sync({ force: true })
  .then(() => {
    console.log('DB synced!');
    seed(Vegetable, veggieData);
    seed(Gardener, gardenerData);
    seed(Plot, plotData);
  })
  .catch(error => {
    console.log('error caught!', error);
    db.close();
  });

function seed(field, data) {
  Promise.all(data.map(el => field.create(el))).then(() => {
    console.log(`Added data to table`);
    db.close();
  });
}
