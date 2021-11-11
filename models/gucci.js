const mongoose = require("mongoose") 
const gucciSchema = mongoose.Schema({ 
    Itemname: String, 
    Quantity: String, 
    price: Number 
}) 
 
module.exports = mongoose.model("Gucci", 
gucciSchema) 