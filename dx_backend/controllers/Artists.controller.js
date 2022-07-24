var connection = require('../config/db_config')


exports.allArtists = async(req, res)=>{
    var query = 'SELECT a.artistId,a.name,a.dob,a.bio from spotify.artists as a;';
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        res.json(results);
    });
}

exports.topTenArtists = async(req, res)=>{
    var query = 'SELECT a.name,AVG(d.avg_rating) FROM artists AS a INNER JOIN spotify.artist_song as a_s ON a.artistId = a_s.artistId JOIN(SELECT songId, AVG(sr.rating) AS avg_rating FROM spotify.song_rating as sr GROUP BY sr.songId ORDER BY AVG(sr.rating) DESC)d ON a_s.songId IN (d.songId)  GROUP BY a.name ORDER BY d.avg_rating DESC LIMIT 10;';
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        res.json(results);
    });
}

exports.addArtist = async(req, res)=>{
    const {name,dob,bio} = req.body;
    var query = "INSERT INTO spotify.artists( name, dob, bio) VALUES ('"+name+"','"+dob+"','"+bio+"');";
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        res.json(results);
    });
}

exports.deleteArtistById = async(req, res)=>{
    const {artistId} = req.body;
    var query = "DELETE FROM spotify.artists WHERE artistId = '"+artistId+"';";
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        res.json(results);
    });
}

exports.getArtistCount = async(req, res)=>{
    var query = "SELECT COUNT(*) FROM spotify.artists;";
    connection.query(query ,function (error, results, fields) {
        if (error) throw error;
        //console.log(results);
        res.json(results);
    });
}
