var connection = require('../config/db_config');

exports.addUser = async(req, res)=>{
    const{songId,userId,rating} = req.body;
    let sql = "INSERT INTO  spotify.users (email,password,userName) VALUES (?,?,?)";
    connection.query(sql, [email,password,userName], function(err, result) {
        if(err){
            console.log(err);
        }
        //console.log('inserted 88 data');
        res.send("inserted");
        //  console.log("query ", sql2);

    });
}

exports.authUser = async(req, res)=>{
    const{userName,password} = req.body;
    let sql = "SELECT * FROM users WHERE userName = ? AND password = ?";
    connection.query(sql, [userName,password], function(err, result) {
        if(err){
            console.log(err);
        }
        //console.log('inserted 88 data');
        res.json(result);
        //  console.log("query ", sql2);

    });
}
