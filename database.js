var mysql = require("mysql"); 

var connection = mysql.createConnection({ 
   user: "root", 
   password: "", 
   database: "nodetest"
}); 

// Get records from a city
exports.getUsers = function(callback) {
  connection.query('SELECT * FROM user;', function (error, rows, fields) { 
    callback(rows);
  });
};