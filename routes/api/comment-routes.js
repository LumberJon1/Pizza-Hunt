const {addComment, removeComment} = require("../../controllers/comment-controller");
const router = require("express").Router();

// Endpoint handling for /api/comments/:pizzaID
router.route("/:pizzaID").post(addComment);

// /api/comments/:pizzaID/:commentID
router.route("/:pizzaID/:commentID").delete(removeComment);

module.exports = router;