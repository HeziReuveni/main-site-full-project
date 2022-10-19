const path = require("path");
const { upload } = require("../middleware/s3-aws");

const uploadImage = (req, res, next) => {
  const files = req.files;

  const uniqueImagesFiles = [];
  Object.keys(files).forEach(async (key) => {
    const fileName = files[key].name;

    uniqueImagesFiles.push(fileName);

    const result = await upload(files[key]);

    // files[key].mv(filepath, (err) => {
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).json({ status: "error", message: err });
    //   }
    // });
  });

  req.images = uniqueImagesFiles;

  next();
};
module.exports = { uploadImage };
