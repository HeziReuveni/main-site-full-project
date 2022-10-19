const express = require("express");
const fileUpload = require("express-fileupload");
const router = express.Router();
const path = require("path");
const { createDetails } = require("../controllers/detailsController");
const { uploadImage } = require("../controllers/imagesController");
const fileExtLimiter = require("../middleware/fileExtLimiter");
const fileSizeLimiter = require("../middleware/fileSizeLimiter");
const filesPayloadExists = require("../middleware/filesPayloadExists");

// POST Uploads image
router.post(
  "/images",
  fileUpload({ createParentPath: true }),
  filesPayloadExists,
  fileExtLimiter([".png", ".jpg", ".jpeg"]),
  fileSizeLimiter,
  uploadImage,
  createDetails
);

module.exports = router;
