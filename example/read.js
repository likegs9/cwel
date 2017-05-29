let request=require('request');
let iconv=require('iconv-lite');
let cheerio=require('cheerio')

exports.read=function(url,callback) {
    request({url,encoding:null},function(err,response,body){
        body=iconv.decode(body,'gbk');
        let $=cheerio.load(body);
        let result=[];
        $('.keyword .list-title').each(function (index,item) {
            let $this=$(item);
            let cur={
                name:$this.text(),
                url:$this.attr('href')
            }
            result.push(cur)
        })
        callback(err,result)
    })
}

