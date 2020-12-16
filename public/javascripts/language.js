function languageSelect(obj) {
    //代表的是选中项的index索引
    var index = obj.selectedIndex;
    //代表的是选中项的的值
    var val = obj.options[index].value;
    //代表的是选中项的text
    var txt = obj.options[index].text;
    switch (val) {
        case "english":
            location.href = "/";

            break;
        case "chinese":
            location.href = "/chinese";

            break;
        default:
            break;
    }
}


//写入cookie函数
function setCookie(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}
//获取cookie
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}

//setCookie('lan','hk');    繁体中文
//setCookie('lan','cn');    简体中文