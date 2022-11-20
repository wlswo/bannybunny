const express = require("express");

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controller/BlogController");
 
const router = express.Router();
 
/** 메소드 별로 분기 */
router.route("/").get(getAllBlogs)
                 .post(createBlog);

router.route("/:id").get(getBlogById)
                    .put(updateBlog)
                    .delete(deleteBlog)
                    .patch(updateBlog);
 
module.exports = router;