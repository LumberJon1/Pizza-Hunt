const {Schema, model} = require("mongoose");

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
    toppings: [],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
}
);

// Add virtual comment count
PizzaSchema.virtual("commentCount").get(function() {
    return this.comments.length;
})

// Create model from schema template
const Pizza = model("Pizza", PizzaSchema);

module.exports = Pizza;