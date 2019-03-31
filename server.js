'use strict';

let express = require('express');
let cors = require('cors');
let multer = require('multer');
let upload = multer();

let app = express();

app.use(cors());

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.post('/api/fileanalyze', upload.single('upfile'), (req, res) => {
  res.json({"filename": req.file.originalname, "size": req.file.size});
})

app.listen(process.env.PORT || 3000, () => {
  console.log('nodejs is listenting...')
})
