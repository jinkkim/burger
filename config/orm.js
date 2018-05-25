// Import MySQL connection.
var connection = require('./connection.js');

// Helper function for generating mySQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Helper function for generating mySQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

// create the ORM object to perform SQL queries
var orm = {

    all: function(tableInput, cb){
            
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            
            cb(result);
        });

                },

// function that insert a single table entry
    create: function(table, cols, vals, cb){
            // construct the query string that inserts a single row into the target table
            var queryString = "INSERT INTO " + table;

            queryString += " (";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(vals.length);
            queryString += ") ";

            //perform the database query
            connection.query(queryString, vals, function(err, result) {
                if (err) {
                    throw err;
                }

                cb(result);
            });
                },

// function that updates a single table entry
    update: function(table, objColVals, condition, cb){
            //construct the query string that updates a single entry in the target table
            var queryString = "UPDATE " + table;
            
            queryString += " SET ";
            queryString += objToSql(objColvals);
            queryString += " WHERE ";
            queryString += condition;

            //perform the database query
            connection.query(queryString, function(err, result ) {
                if (err) {
                    throw err;
                }
                //return results in callback
                cb(result);
            });
        }
};

//export the orm object for use in other modules
module.exports = orm;