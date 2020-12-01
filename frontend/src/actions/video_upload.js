// code borrowed from https://stackabuse.com/uploading-files-to-aws-s3-with-node-js/
const fs = require('fs');
const AWS = require('aws-sdk');
const bucketKeys = require('../../config/aws_dev');

const s3 = new AWS.S3({
  accessKeyId: bucketKeys.ID,
  secretAccessKey: bucketKeys.SECRET
})

export const uploadVideo = fileName => {

  const fileContent = fs.readFileSync(fileName);
  console.log(fileName)

  // how do we name each file?
  const params = {
    Bucket: bucketKeys.BUCKET_NAME,
    Key: 'test.mp4',
    Body: fileContent
  }

  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    delete params["Body"];
    console.log(s3.getSignedUrl('getObject', params));
    
  });
};


