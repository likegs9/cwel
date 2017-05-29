let read=require('./read').read;
let write=require('./write').write;
let async=require('async');
let Move=require('./module');
let url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1'
function start() {
    async.waterfall([
        function (callback) {
            Move.remove({},callback)
        },
        function (data,callback) {
        //把callback的第二个参数传给下一个函数,作为下一个函数的第一个参数
            read(url,callback)
        },
        function (data,callback) {
            write(data,callback)
        },
    ])
}
start()


