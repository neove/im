(function() {
    // 配置
    var envir = 'online';
    var configMap = {
        test: {
            appkey: '3dc5da62180a4c81af0e1d571dd32bcc',
            url:'https://apptest.netease.im'
        },
        pre:{
    		appkey: '3dc5da62180a4c81af0e1d571dd32bcc',
    		url:'http://preapp.netease.im:8184'
        },
        online: {
           appkey: '3dc5da62180a4c81af0e1d571dd32bcc',
           url:'https://app.netease.im'
        }
    };
    window.CONFIG = configMap[envir];
}())