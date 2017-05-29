let express = require('express');
let app=express();
let path=require('path');
app.use(express.static(path.resolve('../node_modules')));
app.listen(8080);
let Move=require('./module');
//文件建了views文件夹,并且els模板在views文件家里剩下的就不用写了
app.set('view engine','ejs')
app.get('/',function(req,res){
    Move.find({},function (err,movies) {
        res.render('index',{movies})
    })
})