/**
 * 网易云信server API 接口 1.0
 * Class ServerAPI
 * @author  hzchensheng15@corp.netease.com
 * @date    2015-10-28  13:00
 * 
***/

var crypto = require('crypto');
var https  = require('https');
var http   = require('http');
var urlParser = require('url');
var querystring = require('querystring');

    /**
     * 参数初始化
     * @param $AppKey
     * @param $AppSecret
     */
	function ServerApi(AppKey,AppSecret){
		this.AppKey = AppKey;                     //开发者平台分配的AppKey
		this.AppSecret=AppSecret;                 //开发者平台分配的AppSecret,可刷新
	}

    /**
     * API checksum校验生成
     * @param  void
     * @return CheckSum(对象私有属性)
     */
	ServerApi.prototype.checkSumBuilder = function(){
		//此部分生成随机字符串
		var charHex = '0123456789abcdef';
		this.Nonce = '';                  //随机数（最大长度128个字符）
		for(var i=0;i<128;i++){			//随机字符串最大128个字符，也可以小于该数
			this.Nonce += charHex.charAt(Math.round(15*Math.random()));
		}
		this.CurTime = Date.parse(new Date())/1000;		//当前UTC时间戳，从1970年1月1日0点0 分0 秒开始到现在的秒数(String)
		var join_string = this.AppSecret + this.Nonce + this.CurTime
		
		var sha1 = crypto.createHash('sha1');
		sha1.update(join_string);
		this.CheckSum = sha1.digest('hex');       //SHA1(AppSecret + Nonce + CurTime),三个参数拼接的字符串，进行SHA1哈希计算，转化成16进制字符(String，小写)

	}

    /**
     * 使用发送post请求
     * @param  url 			[请求地址]
     * @param  data    		[json格式数据]
     * @param  callback    	[请求返回的回调函数]
     * @return 回调函数中返回两参数(err,json格式的data)
     */
	ServerApi.prototype.postDataHttps = function(url,data,callback){
		this.checkSumBuilder();

		var urlObj = urlParser.parse(url);
		var httpHeader = {
			'AppKey'		: this.AppKey,
			'Nonce'			: this.Nonce,
			'CurTime'		: this.CurTime,
			'CheckSum'		: this.CheckSum,
			'Content-Type' 	: 'application/x-www-form-urlencoded;charset=utf-8',
		};
		var options = {
	  		hostname: urlObj.hostname,
	  		port 	: 80,
	  		path 	: urlObj.path,
	  		method 	: 'POST',
	  		headers	: httpHeader
		};

		var that = this;
		var req = http.request(options, function(res) {
	  		res.setEncoding('utf8');
	  		// console.log("statusCode: ", res.statusCode);
	  		// console.log("headers: ", res.headers);

	  		res.on('data', function(chunk){
	  			if(Object.prototype.toString.call(callback)==='[object Function]'){
	  				var result = JSON.parse(chunk);
	  				callback.call(that,null,result);
	  			}	
	  		});
		});
		
		var postData = querystring.stringify(data);
		req.write(postData);
		req.end();

		req.on('error', function(err) {
		  	if(Object.prototype.toString.call(callback)==='[object Function]'){
				callback.call(that,err,null);
			}
		});
	}

    /**
     * 创建云信ID
     * 1.第三方帐号导入到云信平台；
     * 2.注意accid，name长度以及考虑管理秘钥token
     * @param data 包含：
     *     -  accid     [云信ID，最大长度32字节，必须保证一个APP内唯一（只允许字母、数字、半角下划线_、@、半角点以及半角-组成，不区分大小写，会统一小写处理）]
     *     -  name      [云信ID昵称，最大长度64字节，用来PUSH推送时显示的昵称]
     *     -  props     [json属性，第三方可选填，最大长度1024字节]
     *     -  icon      [云信ID头像URL，第三方可选填，最大长度1024]
     *     -  token     [云信ID可以指定登录token值，最大长度128字节，并更新，如果未指定，会自动生成token，并在创建成功后返回]
     * @param  callback    	[请求返回的回调函数]
     * @return 回调函数中返回两参数(err,json格式的data)
     */
	ServerApi.prototype.createUserId = function(data,callback){
		var url = 'https://api.netease.im/nimserver/user/create.action';
		var postData = {
			'accid'	: data['accid']||'',
			'name'	: data['name']||'',
			'props'	: data['props']||'',
			'icon'	: data['icon']||'',
			'token'	: data['token']||''		
		};
		this.postDataHttps(url,postData,callback);
	}


    /**
     * 更新云信ID
     * @param data 包含：
     *     -  accid     [云信ID，最大长度32字节，必须保证一个APP内唯一（只允许字母、数字、半角下划线_、@、半角点以及半角-组成，不区分大小写，会统一小写处理）]
     *     -  name      [云信ID昵称，最大长度64字节，用来PUSH推送时显示的昵称]
     *     -  props     [json属性，第三方可选填，最大长度1024字节]
     *     -  token     [云信ID可以指定登录token值，最大长度128字节，并更新，如果未指定，会自动生成token，并在创建成功后返回]
     * @param  callback    	[请求返回的回调函数]
     * @return 回调函数中返回两参数(err,json格式的data)
     */
	ServerApi.prototype.updateUserId = function(data,callback){
		var url = 'https://api.netease.im/nimserver/user/update.action';
		var postData = {
			'accid'	: data['accid']||'',
			'name'	: data['name']||'',
			'props'	: data['props']||'',
			'token'	: data['token']||''	
		};
		this.postDataHttps(url,postData,callback);
	}