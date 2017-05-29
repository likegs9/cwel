let request=require('request');
let iconv=require('iconv-lite');
let cheerio=require('cheerio')
//用服务端作为客户端请求数据
/**
 * err,response(响应对象),body(响应体)
 * body真正得到后是二进制buffer,然后需要转码才是字符串,默认是用utf-8编码
 * encoding:null不用request转编码,用iconv自己转
 */
request({uri:'http://top.baidu.com/category?c=1&fr=topindex',encoding:null},function(err,response,body){
    body=iconv.decode(body,'gbk');
    //把字符串变成DOM元素
    let $=cheerio.load(body);
    //console.log(body)
    $('.hd .title a').each(function (index,item) {
        let $this=$(item);
        let cur={
            name:$this.text(),
            url:$this.attr('href')
        }
        console.log(cur)
    })
})