$('.button').on('click', function() {
    var name = $('.name').val()
    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()

    //检查输入的放在后台
    $.ajax({
        url: '/test',
        type: 'POST',
        data: { name: name, email: email, subject: subject, message: message },
        dataType: 'text',
        success: function(data) {
            debugger
            console.log(data);
        },
        error: function(msg) {
            console.log(msg)
        }
    })
})



// var nodemailer = require("nodemailer");
// var settingConfig = require('../config.js');//解析参数
// var smtp = settingConfig.getValueByKey("smtp");
// var mailPwd = settingConfig.getValueByKey("mailPwd");

// function emailTo(email, subject, text, html, callback) {
//     var transporter = nodemailer.createTransport({
//         host: smtp,
//         auth: {
//             user: mailFrom,
//             pass: mailPwd //授权码,通过QQ获取  

//         }
//     });
//     var mailOptions = {
//         from: mailFrom, // 发送者  
//         to: email, // 接受者,可以同时发送多个,以逗号隔开  
//         subject: subject, // 标题  
//     };
//     if (text != undefined) {
//         mailOptions.text = text;// 文本  
//     }
//     if (html != undefined) {
//         mailOptions.html = html;// html  
//     }

//     var result = {
//         httpCode: 200,
//         message: '发送成功!',
//     }
//     try {
//         transporter.sendMail(mailOptions, function (err, info) {
//             if (err) {
//                 result.httpCode = 500;
//                 result.message = err;
//                 callback(result);
//                 return;
//             }
//             callback(result);
//         });
//     } catch (err) {
//         result.httpCode = 500;
//         result.message = err;
//         callback(result);
//     }

// }