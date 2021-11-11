const mongoose = require("mongoose") 
const grapesSchema = mongoose.Schema({ 
 grapes_type: String, 
 Weight: Number, 
 Cost:  Number 
}) 
 
module.exports = mongoose.model("grapes", 
grapesSchema) 