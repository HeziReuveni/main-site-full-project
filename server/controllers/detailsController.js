const Details = require("../models/detailsModel");

const createDetails = (req, res) => {
  const { title, about, email, whatsapp, facebookSrc, services } = req.body;

  const details = new Details({
    title,
    about,
    email,
    whatsapp,
    facebookSrc,
    services,
    namesImages: req.images,
  });
  details
    .save()
    .then((result) => {
      res.send(`Insert to database this data:
   ${result}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  createDetails,
};
