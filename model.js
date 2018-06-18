// Our users are Gardeners who need to keep track of which Vegetables are in their garden Plots.

//  Gardeners -> has many plots.
//  Plots -> has many vegetables.

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false,
});

const Gardener = db.define('Gardener', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Plot = db.define('Plot', {
  size: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  shaded: {
    type: Sequelize.BOOLEAN,
  },
});

const Vegetable = db.define('Vegetable', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  plantedOn: {
    type: Sequelize.DATEONLY,
  },
});

Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);
Vegetable.belongsToMany(Plot, { through: 'veggieLocale' });
Plot.belongsToMany(Vegetable, { through: 'veggieLocale' });
Gardener.belongsTo(Vegetable, { as: 'favoriteVeggie' });

module.exports = { db, Plot, Gardener, Vegetable };
