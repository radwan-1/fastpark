var mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost/test');
mongoose.connect("mongodb://admin:admin123@ds119374.mlab.com:19374/fastpark");
var db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
});

var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model("Item", itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
