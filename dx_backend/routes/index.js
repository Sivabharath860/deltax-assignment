var express = require('express');
var router = express.Router();
var path = require('path');
const multer = require('multer');
var songsController = require('../controllers/Songs.controller');
var artistsController = require('../controllers/Artists.controller');
var artist_songController = require('../controllers/artist_song.controller');
var songRatingController = require('../controllers/songRating.controller');
var userController = require('../controllers/user.controller');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname+'/image_upload.html'));
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
    // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },  
});

const limits = {
    fileSize : 4000000
}

//fileFilter function controls which files should be uploaded. req = request being made. file = contains file info. cb = callback function to tell multer when we are done filtering the file. send back an error message to the client with cb.
const fileFilter =(req, file, cb) => {
  //if the file is not a jpg, jpeg, or png file, do not upload it multer; reject it.
  if (!file.originalname.match(/\.(jfif|jpg|jpeg|png)$/)) {
      return cb(new Error('File must be of type JPG, JPEG, or PNG and nore more than 2MB in size'))
  }
  //undefined = nothing went wrong; true = that is true, nothing went wrong, accept the upload.
  cb(undefined, true)
}

//set up the multer middleware
const upload = multer({
    storage: storage,
    limits: limits,
    fileFilter: fileFilter
    // filename: filename
  });


router.get('/',function(req,res) {
    res.render('image_upload');
});

router.get('/allsongs', songsController.allSongs);
router.get('/tTenS', songsController.topTenSongs);
router.get('/allArtists', artistsController.allArtists);
router.get('/tTenA', artistsController.topTenArtists);
router.post('/addArtist', artistsController.addArtist);
router.delete('/delArtById', artistsController.deleteArtistById);
router.post('/addS', songsController.addSong);
router.get('/scount', songsController.getCount);
router.get('/acount', artistsController.getArtistCount);
router.post('/addcomb', artist_songController.addComb);
router.post('/addrating', songRatingController.addRating);
router.post('/addUser', userController.addUser);
module.exports = router;
