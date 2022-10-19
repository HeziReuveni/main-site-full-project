const s3 = require("aws-sdk/clients/s3");

const S3 = new s3({
  region: "eu-west-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

function upload(file) {
  const uploadParams = {
    Bucket: "hezi",
    Key: file.name,
    Body: file.data,
    ACL: "public-read",
    ContentType: "image/jpeg",
  };

  return S3.upload(uploadParams).promise();
}

exports.upload = upload;
