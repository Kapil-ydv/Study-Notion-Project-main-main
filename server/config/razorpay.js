const Razorpay = require("razorpay");
require("dotenv").config();

exports.instance = new Razorpay({
  key_id:"rzp_test_2l1U2EWy7WzRyk",
  key_secret:"82ZofjM7ecK9REfwwjtNinc3",
  // key_id: "rzp_test_Qq1R28RDozLWGC",
  // key_secret: "97Dbt9GGaIAtnN2CvWDi2Q3s",
});
