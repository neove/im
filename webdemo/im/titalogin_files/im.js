
//嵌入到线上的js

var oBtn = document.getElementsByClassName('login-btn')[0];
var oIdInput = document.getElementById('login_username')
var oPwdInput = document.getElementById('login_password')

function bind(obj, evname, fn) {  /** evname 是事件名称，不加on**/
    if (obj.addEventListener) {
        obj.addEventListener(evname, fn, false);
    } else {
        obj.attachEvent('on' + evname, function () {
            fn.call(obj);   /**解决ie下this的指向问题 **/
        })
    }
}
//读取cookies 
function readCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }

}

//im账号的长度要求在9位以内，
// function getId(id){
//     return id.length > 9 ? id.slice(0,9) : id;
// }
bind(oBtn, "click", function () {
    var id = oIdInput.value.trim();
    var pwd = oPwdInput.value.trim();
    //调用接口创建云信id和token
    var userData = {
        "accid": id,
        "name": "beisen"
    }
    $.ajax({
        type: "POST",
        url: 'http://localhost:8888',   //  这里要改成服务器的地址
        data: userData,
        success: function (data) {
            console.log(JSON.parse(data))
            document.cookie = "uid=" +JSON.parse(data).info.accid;
            document.cookie = "sdktoken=" + JSON.parse(data).info.token;
            if (pwd != JSON.parse(data).info.pwd) {
                 alert('密码错误');
             } else {
                 window.location = 'http://10.189.1.99:8888/webdemo/im/main.html';
             }
        }
    })
})
