'use strict';

// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

const bucketName = 'gcp-text-detect-67';
// const fileName = 'sample-images/IMG_2686.JPG';
// const fileName = 'sample-images/IMG_2687.JPG';
// const fileName = 'sample-images/IMG_2688.JPG';
// const fileName = 'sample-images/IMG_2689.JPG';
// const fileName = 'sample-images/IMG_2693.JPG';
// const fileName = 'sample-images/IMG_2694.JPG';
// const fileName = 'sample-images/IMG_2695.JPG';
const fileName = 'sample-images/IMG_2696.JPG';
// const fileName = 'sample-images/IMG_2697.JPG';

// Performs text detection on the gcs file
client
  .textDetection(`gs://${bucketName}/${fileName}`)
  .then(results => {
    const detections = results[0].textAnnotations;
    console.log('Text:');
    detections.forEach(text => console.log(text));
  })
  .catch(err => {
    console.error('ERROR:', err);
  });

