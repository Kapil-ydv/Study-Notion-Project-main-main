const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dt4xeo3mu",
  api_key: "191453974749338",
  api_secret: "qqq8_71cg5e80_evAGnpA2wSwwI",

});

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  try{
  const options = { folder };
  if (height) {
    options.height = height;
  }
  if (quality) {
    options.quality = quality;
  }

  options.resource_type = "auto";

  return await cloudinary.uploader.upload(file.tempFilePath, options);
}
catch (error) {
  console.log("Error while uploading image");
  console.log(error);
}}
