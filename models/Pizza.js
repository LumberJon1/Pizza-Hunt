const {Schema, model} = require("mongoose");
const dateFormat = require("../utils/dateFormat");

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
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
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
        getters: true
    },
    id: false
}
);

// Add virtual comment count
PizzaSchema.virtual("commentCount").get(function() {
    return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

// Create model from schema template
const Pizza = model("Pizza", PizzaSchema);

module.exports = Pizza;