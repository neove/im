define(["talent","templates/common"],function(talent,jst){return talent.ItemView.extend({template:_.template(["系统升级通知，届时将于2016年7月15日 23：00 - 次日07:00影响正常使用。请您提前做好工作安排。谢谢！&nbsp;&nbsp;&nbsp;",'<span class="icon-dialog-closed" data-name="upgrade-closed"></span>'].join("")),className:"tt-upgrade",events:{"click [data-name=upgrade-closed]":"_closeHandler"},initialize:function(options){this.settings=Talent._.extend({},this.defaults,options);this.$el.css({background:"#f8ecd1",color:"#555",padding:"3px 0","text-align":"center","font-size":"12px",position:"fixed",top:"0",left:"50%","margin-left":-450,width:700,zIndex:10010})},_closeHandler:function(){this.$el.hide()}})});
//# sourceMappingURL=http://sourcemap.beisen.co/ux/tita-web-v4/hotfix/app/scripts/views/common/system-upgrade-view-1607131501.min.map