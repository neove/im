define.amd=false;
/// 嵌入到线上的js文件
function addScript(url) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    var heads = document.getElementsByTagName("head");
    if (heads.length) {
        heads[0].appendChild(script);
    }
    else {
        document.documentElement.appendChild(script);
    }
}
//放到服务器之后要改ip地址
addScript("http://10.189.1.33:8888/webdemo/3rd/Web_SDK_Base_v2.4.0.js");
addScript("http://10.189.1.33:8888/webdemo/3rd/Web_SDK_NIM_v2.4.0.js");
addScript("http://10.189.1.33:8888/webdemo/3rd/jquery-1.11.3.min.js");
addScript("http://10.189.1.33:8888/webdemo/im/js/sdk.js?v=2");




