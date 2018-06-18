// Our users are Gardeners who need to keep track of which Vegetables are in their garden Plots.

//  Gardeners -> has many plots.
//  Plots -> has many vegetables.

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr', {
  logging: false,
});

const Gardener = db.define('Gardener', {
  // title: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // slug: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // content: {
  //   type: Sequelize.TEXT,
  //   allowNull: false,
  // },
  // status: {
  //   type: Sequelize.ENUM('open', 'closed'),
  // },
});

const Plot = db.define('Plot', {
  // name: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  // email: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   validate: {
  //     isEmail: true,
  //   },
  // },
});

const Vegetable = db.define('Vegetable', {});

Plot.belongsTo(Gardener);
Vegetable.belongsTo(Plot);

module.exports = { db, Plot, Gardener, Vegetable };
