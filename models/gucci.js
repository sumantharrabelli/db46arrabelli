const mongoose = require("mongoose")
const gucciSchema = mongoose.Schema({
    Itemname: String,
    quantity: String,
    price: Number
})

module.exports = mongoose.model("gucci", gucciSchema)
