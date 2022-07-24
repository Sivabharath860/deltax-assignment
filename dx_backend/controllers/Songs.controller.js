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
    var query = "SELECT d.sname,d.sid,d.average_rating, a.name FROM spotify.artists AS a INNER JOIN spotify.artist_song as a_s ON a.artistId = a_s.artistId RIGHT JOIN(SELECT s.songName AS sname, sr.songId AS sid, AVG(sr.rating) AS average_rating FROM spotify.song_rating AS sr INNER JOIN spotify.songs AS s ON sr.songId = s.songId GROUP BY sr.songId ORDER BY 3 DESC LIMIT 10)d ON a_s.songId = d.sid ORDER BY 3 DESC;";
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        res.json(results);
    });
}

exports.addSong = async(req, res)=>{
    if (!req.files) {
        //console.log(req);
        res.send("No file upload");
    } else {
        console.log(req.body);
        const{songName, dor} = req.body;
        console.log(req.files.image.data);
        let sql = "INSERT INTO  spotify.songs (songName,dor,image) VALUES (?,?,?)";
        console.log("hdsfh");
        connection.query(sql, [songName,dor,req.files.image.data], function(err, result) {
            if(err){
                console.log(err);
            }
            console.log('inserted 88 data');
            res.send("inserted");
            //  console.log("query ", sql2);

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