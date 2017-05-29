let Move=require('./module');
let async=require('async');
exports.write=function (movies,callback) {
    //async.forEach(movies,function(movie,cb){
    Move.create(movies,callback)
    //},callback)
}