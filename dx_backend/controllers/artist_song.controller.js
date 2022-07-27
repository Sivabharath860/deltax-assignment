var connection = require('../config/db_config');

exports.addComb = async(req, res)=>{
    const{artistId, songId} = req.body;
    let sql = "INSERT INTO  spotify.artist_song (artistId,songId) VALUES (?,?)";
    connection.query(sql, [songId,artistId], function(err, result) {
        if(err){
            console.log(err);
            res.json(err);
        }
        //console.log('inserted 88 data');
        res.json(result);
        //  console.log("query ", sql2);

    });
}
