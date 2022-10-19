const checkCardDetails = (req, res) => {
  const { formData, price } = req.body;
  // Checks if there are values ​​in the input
  for (let value of Object.values(formData)) {
    if (!value) {
      return res.status(400).send("Mandatory fields must be entered");
    }
    // Checks if the inputs contain only digits
    for (let value of Object.values(formData)) {
      const result = /^[0-9]+$/.test(value);
      if (!result) {
        return res.status(400).send("The fields must contain only digits");
      }
    }
  }
 return(
    price
      ? res.status(200).send("Send details to server! And a ticket is charged for NIS 757")
      : res.status(200).send("Send details to server! And a ticket is charged for NIS 687")
  );
};

module.exports = { checkCardDetails };
