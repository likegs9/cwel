let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/gs');
let MovieSchema=new mongoose.Schema({
    name:String,
    url:String
})
let Movie=mongoose.model('Movie',MovieSchema);
module.exports=Movie