const Razorpay = require("razorpay");
require("dotenv").config();

exports.instance = new Razorpay({
  key_id:"rzp_test_2l1U2EWy7WzRyk",
  key_secret:"82ZofjM7ecK9REfwwjtNinc3",
  // key_id: "rzp_test_2l1U2EWy7WzRyk",
  // key_secret: "82ZofjM7ecK9REfwwjtNinc3",
});
