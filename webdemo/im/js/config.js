(function() {
    // 配置
    var envir = 'online';
    var configMap = {
        test: {
            appkey: 'c770f5814bf42fb83330d3b20f14ba1a',
            url:'https://apptest.netease.im'
        },
        pre:{
    		appkey: 'c770f5814bf42fb83330d3b20f14ba1a',
    		url:'http://preapp.netease.im:8184'
        },
        online: {
           appkey: 'c770f5814bf42fb83330d3b20f14ba1a',
           url:'https://app.netease.im'
        }
    };
    window.CONFIG = configMap[envir];
}())