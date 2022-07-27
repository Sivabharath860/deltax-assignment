var connection = require('../config/db_config');

exports.addRating = async(req, res)=>{
    const{songId,userId,rating} = req.body;
    let sql = "INSERT INTO  spotify.song_rating (songId,userId,rating) VALUES (?,?,?)";
    connection.query(sql, [songId,userId,rating], function(err, result) {
        if(err){
            console.log(err);
        }
        console.log('inserted 88 data');
        res.json(result);
        //  console.log("query ", sql2);

    });
}

exports.getRatingsByUser = async(req, res)=>{
    const{userId} = req.body;
    let sql = "SELECT * FROM spotify.song_rating WHERE userId = ?;";
    connection.query(sql, [userId], function(err, result) {
        if(err){
            console.log(err);
        }
        res.json(result);
    });
}
