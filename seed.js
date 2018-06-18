const { db } = require('./model');

db.sync({ force: true })
  .then(() => console.log('DB synced!'))
  .catch(() => console.log('error caught!'))
  .finally(() => db.close());
