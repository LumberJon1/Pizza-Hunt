const router = require('express').Router();
// Import controller functions
const {
    getAllPizza,
    getPizzaByID,
    createPizza,
    updatePizza,
    deletePizza
} = require("../../controllers/pizza-controller");

// Set up GET all and POST at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaByID)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;