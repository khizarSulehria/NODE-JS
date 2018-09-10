const noteRoute  = require('./note_route');

module.exports = function(app,db){
    noteRoute(app,db);
}