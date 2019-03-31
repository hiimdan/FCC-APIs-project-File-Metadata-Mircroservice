# FCC APIs project File Metadata Microservice
### Details:
- Submission of file through the form submits a `POST` request to `/api/fileanalyze` where a JSON response with the file name and size in bytes will be returned.
- Relies on the [multer](https://www.npmjs.com/package/multer) npm package to handle extraction of file metadata.
