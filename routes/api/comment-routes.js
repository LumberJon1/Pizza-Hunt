const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require("../../controllers/comment-controller");

const router = require("express").Router();

// Endpoint handling for /api/comments/:pizzaID
router.route("/:pizzaID").post(addComment);

// /api/comments/:pizzaID/:commentID
router
    .route("/:pizzaID/:commentID")
    .put(addReply)
    .delete(removeComment);

// Remove a reply from a comment with /api/comments/:pizzaID/:commentID/:replyID
router.route('/:pizzaID/:commentID/:replyID').delete(removeReply);


module.exports = router;