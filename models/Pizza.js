const {schema, model} = require("mongoose");

// Schema to structure the shape of pizza data
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: []
});

// Create model from schema template
const Pizza = model("Pizza", PizzaSchema);

module.exports = Pizza;