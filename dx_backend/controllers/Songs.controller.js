var connection = require('../config/db_config')
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './public/images/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
 
var upload = multer({
    storage: storage
});

exports.allSongs = async(req, res)=>{
    var query = 'SELECT s.songId,s.songName,s.dor from spotify.songs as s;';
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        res.json(results);
    });
}

exports.topTenSongs = async(req, res)=>{
    var query = "SELECT d.sname,d.sid,d.average_rating, a.name, d.image, d.imgName FROM spotify.artists AS a INNER JOIN spotify.artist_song as a_s ON a.artistId = a_s.artistId RIGHT JOIN(SELECT s.songName AS sname, sr.songId AS sid, AVG(sr.rating) AS average_rating, s.image AS image, s.image_name as imgName FROM spotify.song_rating AS sr INNER JOIN spotify.songs AS s ON sr.songId = s.songId GROUP BY sr.songId ORDER BY 3 DESC LIMIT 10)d ON a_s.songId = d.sid ORDER BY 3 DESC;";
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        res.json(results);
    });
}

exports.addSong = async(req, res)=>{
    //console.log(req);
    // console.log("...........................");
    //console.log(req.file);
    if (!req.files.file) {
        //console.log(req);
        res.send("No file upload");
    } else {
        //console.log(req)
        //console.log(req.body);
        const{name, dor, aname} = req.body;
        var sid = "";
        var aid = "";
        console.log(aname[0].artistId);
        console.log(req.files.file.data);
        let sql = "INSERT INTO  spotify.songs (songName,dor,image) VALUES (?,?,?)";
        connection.query(sql, [name,dor,req.files.file.data], function(err, result) {
            if(err){
                console.log(err);
            }
            console.log('inserted 88 data');
            res.json(result);
        });
        
    }
}

exports.getCount = async(req, res)=>{
    var query = "SELECT COUNT(*) FROM spotify.songs;";
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        res.json(results);
    });
}

exports.checkSong = async(req, res)=>{
    const {value} = req.body;
    console.log(value);
    var query = "SELECT songName,songId FROM songs WHERE songName LIKE '"+value+"%';";
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.json(results);
    });
}
