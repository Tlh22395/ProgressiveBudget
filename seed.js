var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

var transactionSeed = [
  {
    name: "Vacation",
    value: 200,
  },
  {
    name: "Bootcamp",
    value: 4000,
  },
  {
    name: "food",
    value: 120,
  },
  {
    name: "groceries",
    value: 150,
  },
];

db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(transactionSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
