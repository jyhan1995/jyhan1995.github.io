var express = require('express');
var router = express.Router();
//引入模块 nodemailer
const nodemailer = require('nodemailer')

//邮箱配置
var config = {
    // 163邮箱 为smtp.163.com
    host: 'smtp.qq.com', //这是qq邮箱
    //端口
    port: 465,
    auth: {
        // 发件人邮箱账号
        user: '455411013@qq.com',
        //发件人邮箱的授权码 这里可以通过qq邮箱获取 并且不唯一
        pass: 'uukisgyyuscqcafc'
    }
}
const transporter = nodemailer.createTransport(config)
var mail = {
    // 发件人 邮箱  '昵称<发件人邮箱>'
    from: `455411013@qq.com`,
    // 主题
    subject: '主页留言',
    // 收件人 的邮箱 可以是其他邮箱 不一定是qq邮箱
    to: '455411013@qq.com',
    // 内容
    text: `您有新的留言`,
    //这里可以添加html标签
    html: `<p>发件人</p>`

}

function sendEmail() {
    transporter.sendMail(mail, function(error, info) {
        if (error) {
            return console.log(error);
        } else {
            alert("发送成功")
        }
        transporter.close()
        console.log('mail sent:', info.response)
    })
}

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/chinese', function(req, res, next) {
    res.render('index-chinese');
});

router.post('/test', function(req, res) {
    console.log(req.body);
    mail.html = `
            <p>发件人:${req.body.name}</p>
            <p>发件人邮箱:${req.body.email}</p>
            <p>主题:${req.body.subject}</p>
            <p>内容:${req.body.message}</p>


  `

    // sendEmail();

    // res.send({ msg: '邮件已发送' })
    // res.send({ error: '邮件未发送' })





});

module.exports = router;