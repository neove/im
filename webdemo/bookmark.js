/// 嵌入到线上的js文件
define.amd = false;
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

//点击书签之后同步注册和设置cookie



document.cookie = "uid=109124247";
document.cookie = "sdktoken=d4852c79f53bd00bd2c95e28c1bd8abc";
addScript("http://10.189.1.99:8888/webdemo/3rd/Web_SDK_Base_v2.4.0.js");
addScript("http://10.189.1.99:8888/webdemo/3rd/Web_SDK_NIM_v2.4.0.js");
addScript("http://10.189.1.99:8888/webdemo/im/js/sdk.js?v=2")

setTimeout(function () {
    var div = document.createElement('div');
    var body = document.getElementsByTagName('body')[0];
    div.className = 'im-box'
    div.innerHTML = '<div class="wrapper box-sizing" id="im-wrapper" style="z-index:1000"><div class="content"><div class="left-panel radius5px"><div class="hide loading" id="j-loading"></div><div class="title" style="height:40px"><input class="im-search" placeholder="添加好友" id="im_add"></div><div class="panel" id="j-switchPanel"><a href="javascript:;" class="box-sizing tc m-unread panel_tab" data-type="conversations"><span class="icon icon-chat cur"></span><b class="u-unread hide">0</b></a> <a href="javascript:;" class="box-sizing tc panel_tab" data-type="contacts"><span class="icon icon-list"></span></a><a href="javascript:;" class="box-sizing tc panel_tab" data-type="teams"><span class="icon icon-team cur"></span></a></div><div class="friends" id="j-loadConversations" data-type="conversations"><div class="list"><div class="m-panel"><div class="panel_item m-sysMsg" id="showNotice"><div class="panel_avatar"><img class="panel_image" src="http://10.189.1.99:8888/webdemo/im/images/notice.png" width="30" height="30" alt="消息中心"></div><div class="panel_text"><p class="panel_single-row">消息中心</p></div><b class="count j-sysMsgCount hide"></b></div></div><div id="j-conversations"><p>正在获取最近联系人...</p></div></div></div><div class="friends hide" id="j-loadContacts" data-type="contacts"><div class="list"><div id="j-contacts"><p>正在获取通讯录...</p></div></div></div><div class="friends hide" id="j-loadTeams" data-type="teams"><div class="list"><div class="m-panel"><div class="panel_item" id="createTeam"><div class="panel_avatar"><img class="panel_image" src="http://10.189.1.99:8888/webdemo/im/images/addTeam.png" alt="创建讨论组"></div><div class="panel_text"><p class="panel_single-row">创建讨论组</p></div></div></div><div class="m-panel"><div class="panel_item" id="createAdvanceTeam"><div class="panel_avatar"><img class="panel_image" src="http://10.189.1.99:8888/webdemo/im/images/addTeam.png" alt="创建高级群"></div><div class="panel_text"><p class="panel_single-row">创建高级群</p></div></div></div><div class="m-panel"><div class="panel_item" id="searchAdvanceTeam"><div class="panel_avatar"><img class="panel_image" src="http://10.189.1.99:8888/webdemo/im/images/searchTeam.png" alt="搜索高级群"></div><div class="panel_text"><p class="panel_single-row">搜索高级群</p></div></div></div><div class="teams m-panel" id="j-teams"></div></div></div></div><div class="chatVernier" id="j-chatVernier"><span class="radius-circle hide"></span></div><div class="right-panel radius5px" id="j-rightPanel"><div class="chat-box" id="chat-box"><div class="title" id="j-chatTitle"><i class="icon icon-close j-close" id="chat-box-close" style="display:block;position:absoluty;right:21px;top:10px;"></i><span id="j-nickName"></span><div class="team-info hide tc radius4px" data-team-id="" id="j-teamInfo"><i class="icon icon-team-info"></i></div></div><div class="chat-content box-sizing" id="j-chatContent"></div><div class="chat-editor box-sizing" id="j-chatEditor" data-disabled="1"><div id="emojiTag" class="m-emojiTag"></div><a href="javascript:;" class="u-emoji" id="j-showEmoji"></a> <span class="msg-type" id="j-msgType"><a href="javascript:;" class="icon icon-file" data-type="file"></a></span><form action="#" id="j-uploadForm"><input multiple type="file" name="file" id="j-uploadFile" class="hide"></form><textarea id="j-messageText" class="msg-input box-sizing radius5px" rows="1" autofocus maxlength="500"></textarea><a href="javascript:;" class="btn-send radius5px" id="j-sendBtn">发送</a></div></div></div><div class="right-panel hide radius5px devices-container" id="j-devices"><div class="info-box"><div class="title tc"><button class="btn back-btn radius5px" id="j-backBtn2">返回</button>多端登录管理</div><div class="content"><div class="main"><div class="pic"></div><div class="mobile hide"><p>云信手机版</p><a class="u-kick j-kickMoblie">下线</a></div><div class="pc hide"><p>云信PC版</p><a class="u-kick j-kickPc">下线</a></div></div></div></div></div></div><div class="team-info-container hide" id="j-teamInfoContainer"></div><div class="cloud-msg-container hide" id="j-cloudMsgContainer"></div><div class="create-team-container radius5px hide" id="j-createTeamContainer"></div><div class="m-blacklist radius5px hide" id="blacklist"><div class="title box-sizing">黑名单 <i class="icon icon-close j-close"></i></div><div class="notice">你不会接收到列表中联系人的任何消息</div><ul class="f-cb list"><li class="items f-cb"><img src="http://10.189.1.99:8888/webdemo/im/images/default-icon.png" class="head"> <span class="nick">未知</span> <button class="btn radius4px btn-ok j-rm">解除</button></li></ul></div><div class="m-notice radius5px hide" id="notice"><div class="title box-sizing">消息中心 <i class="icon icon-close j-close"></i> <b class="j-rmAllSysNotice rmAll"></b></div><ul class="tab f-cb"><li class="crt" data-value="sys">系统通知</li><li data-value="other">自定义通知</li></ul><div class="content j-sysMsg"></div><div class="content j-customSysMsg hide"></div></div><div class="m-dialog hide" id="searchTeamBox"><div class="title box-sizing">搜索高级群 <i class="icon icon-close j-close"></i></div><div class="content tc"><input type="text" class="ipt radius5px box-sizing j-account" placeholder="请输入群id"><div class="info f-cb"><img src="http://10.189.1.99:8888/webdemo/im/images/advanced.png"><div class="desc"><p class="j-name"></p><p><span class="j-teamId"></span></p></div></div></div><div class="btns tc"><button class="btn btn-cancel radius4px cancel j-close">取消</button> <button class="btn btn-ok radius4px search j-search">确定</button> <button class="btn btn-cancel radius4px back j-back">继续搜索</button> <button class="btn btn-ok radius4px add j-add">申请加入</button> <button class="btn btn-ok radius4px chat j-chat">聊天</button></div></div></div><div class="dialog radius5px hide" id="j-logoutDialog"><span class="icon icon-close" id="j-closeDialog"></span><div class="content tc">确定要退出 tita 吗？</div><div class="buttons tc"><button class="btn radius4px btn-cancel" id="j-cancelBtn">取消</button> <button class="btn radius4px btn-ok" id="j-okBtn">确定</button></div></div><div class="m-dialog hide" id="addFriendBox"><div class="title box-sizing">添加好友 </div><div class="content tc"><input type="text" class="ipt radius5px box-sizing j-account" placeholder="请输入帐号"><div class="info f-cb"><img src=""><div class="desc"><p class="j-nickname"></p><p><span class="j-username"></span></p></div></div><div class="tip"></div></div><div class="btns tc"><button class="btn btn-cancel radius4px cancel j-close">取消</button> <button class="btn btn-ok radius4px search j-search">确定</button> <button class="btn btn-cancel radius4px back j-back">继续搜索</button> <button class="btn btn-ok radius4px add j-add">加为好友</button> <button class="btn btn-ok radius4px done j-close">完成</button> <button class="btn btn-ok radius4px chat j-chat">聊天</button> <button class="btn btn-del radius4px blacklist j-blacklist">移出黑名单</button></div></div><div class="m-card hide" id="personCard"><i class="icon icon-close j-close"></i><div class="uInfo f-cb"><img class="u-icon" src=""><div class="desc"><p class="j-nick nick">超级大饼</p><img src="" class="j-gender gender"><p><span class="j-username">帐号：caojidabin</span></p><p><span class="j-nickname">昵称：caojidabin</span></p></div></div><div class="infos"><div class="items alias"><div class="item">备注名</div><input type="text" class="e-alias ipt" maxlength="16"> <a class="j-saveAlias save">保存</a></div><div class="items"><div class="item">生日</div><div class="j-birth">1990-08-18</div></div><div class="items"><div class="item">手机</div><div class="j-tel">18072912974</div></div><div class="items"><div class="item">邮箱</div><div class="j-email">w8@173.com</div></div><div class="items"><div class="item">签名</div><div class="j-sign sign"></div></div></div><ul><li class="mutelist">消息提醒<div class="u-switch"><img src="http://10.189.1.99:8888/webdemo/im/images/btn_switch.png"> <span class="off">off</span> <span class="on">on</span></div></li><li class="blacklist">黑名单<div class="u-switch"><img src="http://10.189.1.99:8888/webdemo/im/images/btn_switch.png"> <span class="off">off</span> <span class="on">on</span></div></li><li class="mute hide" id="setTeamMute">设置禁言<div class="u-switch"><img src="http://10.189.1.99:8888/webdemo/im/images/btn_switch.png"> <span class="off">off</span> <span class="on">on</span></div></li></ul><div class="btns tc"><button class="btn btn-del radius4px j-del del">删除好友</button> <button class="btn btn-cancel radius4px j-add add">加为好友</button> <button class="btn btn-ok radius4px j-chat chat">聊天</button></div></div><div class="m-card m-card-1 hide" id="myInfo"><i class="icon icon-close j-close"></i><div class="uInfo f-cb"><img class="u-icon modifyAvatar j-modifyAvatar" src="" alt="更换头像"><div class="desc"><p class="j-nickname nick">超级大饼</p><img src="" class="j-gender gender"><p><span class="j-username">帐号：caojidabin</span></p></div></div><div class="infos"><div class="operate"><span class="edit j-edit">编辑</span> <span class="save j-save">保存</span> <span class="cancel j-cancel">取消</span></div><div class="tt">基本信息</div><div class="showUI"><div class="items"><div class="item">生日</div><div class="j-birth">1990-08-18</div></div><div class="items"><div class="item">手机</div><div class="j-tel">18072912974</div></div><div class="items"><div class="item">邮箱</div><div class="j-email">w8@173.com</div></div><div class="items"><div class="item">签名</div><div class="j-sign sign">相信真善美,相信真善美相信真善美相信真善美,相信真善美,相信真善美,相信真善美,相信真善美,相信真善美</div></div></div><div class="editUI"><div class="items"><div class="item">昵称</div><input type="text" class="e-nick ipt" maxlength="10"></div><div class="items"><div class="item">性别</div><select class="e-gender slt"><option value="unknown">不显示</option><option value="male">男</option><option value="female">女</option></select></div><div class="items"><div class="item">生日</div><input type="text" class="e-birth ipt" maxlength="20" id="datepicker"></div><div class="items"><div class="item">手机</div><input type="text" class="e-tel ipt ipt-1" maxlength="13"></div><div class="items"><div class="item">邮箱</div><input type="text" class="e-email ipt ipt-1" maxlength="30"></div><div class="items"><div class="item">签名</div><textarea class="e-sign" maxlength="30"></textarea></div></div></div></div><div class="m-modifyAvatar hide" id="modifyAvatar"><i class="icon icon-close j-close"></i><div class="choseFileCtn"><form action="#" class="j-uploadForm"><input type="file" class="j-upload" style="display:none"></form><div class="choseFile j-choseFile">选择图片</div></div><div class="tt">头像更换</div><div class="chose" id="cropImg"><img src="" class="hide"></div><div class="big"><div class="img"><img src="" class="hide"></div><p>160*160</p></div><div class="small"><div class="img"><img src="" class="hide"></div><p>40*40</p></div><div class="btns f-cb"><button class="f-fr btn btn-ok radius4px j-save">保存</button> <button class="f-fr btn btn-cancel radius4p j-reupload">重新选择</button> <button class="f-fr btn btn-cancel radius4p j-close">取消</button></div></div><div id="j-mask" class="mask hide"></div>'

    body.appendChild(div);

    //创建底部的消息窗口
    var div_im = document.createElement('div');
    div_im.setAttribute('id', "bot_chat");
    div_im.innerHTML = "<img src='http://10.189.1.99:8888/webdemo/im/images/notice.png' class='panel_img'></img><b class='u-unread hide bot_unread'>0</b>"
    body.appendChild(div_im);
    //  $('#bot_chat').bind('click', function () {
    //         alert(3);
            // debugger;
            // var tita_id = $('.list-ul-box').find('li:eq(2)').find('a').attr('href').slice(26, 35);
            // var tita_name = $('.user-info-region .user-name').html();
            // var tita_icon = '';
            // if ($('.user-info-region .user-photo').length === 0) {
            //     tita_icon = "http://bpic.588ku.com/element_origin_min_pic/01/31/87/96573b585a7c9c4.jpg";//use a default icon
            // } else {
            //     tita_icon = $('.user-info-region .user-photo img').attr('src');
            // }
            // //下面发起注册请求
            // var userData = {
            //     "accid": tita_id,
            //     "name": tita_name,
            //     "icon": tita_icon
            // }
            // $.ajax({
            //     type: "POST",
            //     url: 'http://localhost:8888',   //  这里要改成服务器的地址
            //     data: userData,
            //     success: function (data) {
            //         console.log(3);
            //     }
            // })
        // })
    //创建link
    function addCssByLink(url) {
        var doc = document;
        var link = doc.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", url);

        var heads = doc.getElementsByTagName("head");
        if (heads.length)
            heads[0].appendChild(link);
        else
            doc.documentElement.appendChild(link);
    }

    //创建script
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
    addScript("http://10.189.1.99:8888/webdemo/book2.js");
    addScript("http://10.189.1.99:8888/webdemo/3rd/Web_SDK_Base_v2.4.0.js");
    addScript("http://10.189.1.99:8888/webdemo/3rd/Web_SDK_NIM_v2.4.0.js");
    addScript("http://10.189.1.99:8888/webdemo/3rd/jquery-1.11.3.min.js");
    addScript("http://10.189.1.99:8888/webdemo/im/js/3rd/jquery-ui.min.js");
    addScript("http://10.189.1.99:8888/webdemo/im/js/config.js");
    addScript("http://10.189.1.99:8888/webdemo/im/js/emoji.js");
    addScript("http://10.189.1.99:8888/webdemo/im/js/util.js?v=2");
    addScript("http://10.189.1.99:8888/webdemo/im/js/cache.js?v=2");
    addScript("http://10.189.1.99:8888/webdemo/im/js/ui.js?v=2");
    addScript("http://10.189.1.99:8888/webdemo/im/js/notification.js?v=2");
    addScript("http://10.189.1.99:8888/webdemo/im/js/team.js?v=2");
    addScript("http://10.189.1.99:8888/webdemo/im/js/widget/uiKit.js?v=2");
    addScript("http://10.189.1.99:8888/webdemo/im/js/main.js?v=2");
    addScript("http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.min.js");
    addScript("http://10.189.1.99:8888/webdemo/im/js/sdk.js?v=2");


    addCssByLink('http://10.189.1.99:8888/webdemo/im/css/base.css');
    addCssByLink('http://10.189.1.99:8888/webdemo/im/css/animate.css');
    addCssByLink('http://10.189.1.99:8888/webdemo/im/css/jquery-ui.css');
    addCssByLink('http://10.189.1.99:8888/webdemo/im/css/jquery.Jcrop.css');
    addCssByLink('http://10.189.1.99:8888/webdemo/im/css/main.css');
    addCssByLink('http://10.189.1.99:8888/webdemo/im/css/uiKit.css');
    addCssByLink('http://10.189.1.99:8888/webdemo/im/css/team.css');
    addCssByLink('http://10.189.1.99:8888/webdemo/im/css/CEmojiEngine.css');


    var doc = document;
    var link = doc.createElement("link");
    link.setAttribute("rel", "icon");
    link.setAttribute("type", "image/x-icon");
    link.setAttribute("href", "http://10.189.1.99:8888/webdemo/im/images/icon.ico");

    var heads = doc.getElementsByTagName("head");
    if (heads.length)
        heads[0].appendChild(link);
    else
        doc.documentElement.appendChild(link);


    // <!--下面是处理im 另外添加的一些逻辑  需要引入到mian.html  页面中去  -->
    function bind(obj, evname, fn) {  /** evname 是事件名称，不加on**/
        if (obj.addEventListener) {
            obj.addEventListener(evname, fn, false);
        } else {
            obj.attachEvent('on' + evname, function () {
                fn.call(obj);   /**解决ie下this的指向问题 **/
            })
        }
    }
    var i, j;

    //点击关闭按钮关闭聊天界面
    $('#chat-box-close').click(function () {
        $('#im-wrapper').css({ "right": "-565px" })
    })
    $('#bot_chat').click(function () {
        $('#im-wrapper').css({ "right": 0 })
    })


}, 1000);