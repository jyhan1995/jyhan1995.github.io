// const fs = require('fs');
// let ws = fs.createWriteStream('./1.txt', {
//   flags: 'w'//文件的打开模式
//   , mode: 0o666//文件的权限设置
//   , encoding: 'utf8'//写入文件的字符的编码
//   , highWaterMark: 3//最高水位线
//   , start: 0 //写入文件的起始索引位置  
//   , autoClose: true//是否自动关闭文档
// })
// fs.writeFile('./1.log', '111', function (err) {
//   if (err) {
//     console.log(err);
//   }
// });

//配置图片
$.ajax({
    type: "GET",
    url: "../config.json",
    dataType: "json",
    success: function(data) {
        debugger
        data.imageConfig.forEach((e) => {
            $(`.${e.name}`).attr("src", `${e.url}`)
        });
    },
    error: function() {

    }
})