const router = require("express").Router();
const multer = require("multer");
const apiController = require("../controllers/api.controller");

const upload = multer()

/**
 * METHOD: GET
 * PATH: /api
 * DESC: default gateway
 */
router.get("/",apiController.index);
/**
 * METHOD: GET
 * PATH: /api/post/all
 * DESC: GET ALL THE NOTES FROM DATABASE
 */
router.get("/post/all",apiController.all);
/**
 * METHOD: POST
 * PATH: /api/post/add
 * DESC: ADD A NOTE 
 */
router.post("/post/add",upload.none(),apiController.store);
/**
 * METHOD: get
 * PATH: /api/post/{id}/show
 * DESC: Show a note with id=id
 */
router.get("/post/:postId/show",apiController.show)
/**
 * METHOD: delete
 * PATH: /api/post/{id}/delete
 * DESC: delete the notes with id
 */
router.delete("/post/:postId/delete",apiController.delete)
/**
 * METHOD: put
 * PATH: /api/post/{id}/edit
 * DESC: edit notes
 */
router.put("/post/:postId/edit",upload.none(),apiController.edit)


module.exports = router;