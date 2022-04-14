const {Pizza} = require("../models");

const pizzaController = {
    // Get all pizzas
    getAllPizza(req, res) {
        Pizza.find({})
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // Get one pizza by ID
    getPizzaByID({params}, res) {
        Pizza.findOne({_id: params.id})
        .then(dbPizzaData => {
            // Check whether the pizza exists in the database and send 404 if none exists
            if (!dbPizzaData) {
                res.status(404).json({message: "No pizza with this ID"});
                return;
            }
            else {
                res.json(dbPizzaData);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    // POST method to database to create a new pizza
    createPizza({body}, res) {
        Pizza.create(body)
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.status(400).json(err));
    },

    // PUT request controller for updating pizzas by ID
    updatePizza({params, body}, res) {
        Pizza.findOneAndUpdate({_id: params.id}, body, {new: true})
        .then(dbPizzaData => {
            // Handle cases where the user select a nonexistent ID
            if (!dbPizzaData) {
                res.status(400).json({message: "No pizza with this ID"});
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    },

    // DELETE requests to remove a single pizza
    deletePizza({params}, res) {
        Pizza.findOneAndDelete({_id: params.id})
        .then(dbPizzaData => {
            // Handle requests for nonexistend pizza IDs
            if (!dbPizzaData) {
                res.status(400).json({message: "No pizza with this ID"});
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    }

};

module.exports = pizzaController;