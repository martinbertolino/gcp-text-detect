# Sample NodeJS project to test the GCP Vision API for text recognition

More details on this here: https://cloud.google.com/vision/docs/detecting-text

## Setting up the project

* You will need a reasonable version of NodeJS (used v11 for this)

* Follow the instructions in the GCP page on how to enable the VisionAPI for your account

* Clone the repository somewhere on your machine
* Go to that directory
* Run npm add
    * This will take some time because the google vision APIs need to download and also compile some native C/C++ components
* Create a storage bucket
* Upload your sample files to the bucket
* Make sure you run source set-gap.sh on your console session to setup the API key location (you will need to change this for your environment)
* Change the code in gcp-text-detect.js (bucketName/fileName) to point to the image to analyze
* Run node gcp-text-detect.js
* The code will log a JSON document with the text and metadata that was picked from the image
* You can compare the sample images in the repo with the corresponding JSON files i.e. IMG_2686.JPG and img-2686.json to review results as of 10/27/2018

* If you have problems also consult the GCP vision API docs and samples

