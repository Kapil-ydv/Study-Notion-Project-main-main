const cloudinary = require("cloudinary").v2;
require("dotenv").config();


exports.cloudinaryConnect = () => {
  try {
    cloudinary.config({
      cloud_name: "dt4xeo3mu",
      api_key: "191453974749338",
      api_secret: "qqq8_71cg5e80_evAGnpA2wSwwI",

    });
    console.log('Cloudinary connected successfully')
  } catch (error) {
    console.log(error.message);
  }
};
