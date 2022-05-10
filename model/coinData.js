const mongoose = require('mongoose');
// name, last, buy, Sell, volume, base_unit 
// of all top 10 results 
const coinSchema = new mongoose.Schema({
    name: String,
    sell: String,
    volume: String,
    last: String,
    buy: String,
    base_unit: String
});

module.exports = new mongoose.model('coin', coinSchema);