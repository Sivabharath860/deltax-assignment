var connection = require('../config/db_config');

exports.addComb = async(req, res)=>{
    const{artistId, songId} = req.body;
    let sql = "INSERT INTO  spotify.artist_song (artistId,songId) VALUES (?,?)";
    connection.query(sql, [artistId,songId], function(err, result) {
        if(err){
            console.log(err);
        }
        //console.log('inserted 88 data');
        res.send("inserted");
        //  console.log("query ", sql2);

    });
}
