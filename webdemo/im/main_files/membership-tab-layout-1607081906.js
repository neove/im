define(["talent","templates/common","views/common/membership/membership-tab-composite-view","$.scrollable","iScroll"],function(talent,jst,MembershipTabCompositeView,ScrolLable,iScroll){var regionType=talent.Region.extend({show:function(view){var self=this;this.ensureEl();var isViewClosed=view.isClosed||_.isUndefined(view.$el);var isDifferentView=view!==this.currentView;if(isDifferentView){this.close()}view.render();if(isDifferentView||isViewClosed){this.open(view).done(function(){self.currentView=view;Marionette.triggerMethod.call(self,"show",view);Marionette.triggerMethod.call(view,"show")})}else{this.currentView=view;Marionette.triggerMethod.call(this,"show",view);Marionette.triggerMethod.call(view,"show")}},open:function(view){var deferred=new $.Deferred;this.$el.empty().append(view.el);addAnimate(view,deferred);return deferred.promise()}});var MainView=talent.Layout.extend({template:jst["common/membership/membership-tab-layout"],className:"membership_tab_container",regions:{tab:{selector:".membership_tab_staff_container",regionType:regionType}},ui:{tab:".membership_tab_staff_container",backContainer:".membership_back",backBtn:".membership_back_btn"},events:{"click .membership_back_btn":"showTopStaffView"},modelEvents:{"change:middleId":"renderTabView","change:profileId":"renderProfileView","change:activeId":"renderActive"},initialize:function(options){},onRender:function(){},getTabData:function(){var deferred=new $.Deferred;var self=this;var request=talent.app.request("Membership:getDataType",{id:this.model.get("middleId"),activeId:this.model.get("activeId"),type:this.model.get("type")});request.done(function(resp){deferred.resolve(resp)});return deferred.promise()},renderTabView:function(top){var self=this;var membershipTabModel=talent.Model.extend({initialize:function(){var subordinate=this.get("subordinate");if(subordinate){this.subordinate=new membershipTabCollection(subordinate);this.unset("subordinate")}}});var membershipTabCollection=talent.Collection.extend({model:membershipTabModel});this.getTabData().done(function(resp){self.membershipTabCompositeView=new MembershipTabCompositeView({collection:new membershipTabCollection(resp),model:self.model});if(resp[0].Id==0&&resp[0].subordinate[0].Id==0){self.ui.backBtn.slideUp("slow");self.ui.tab.addClass("membership_top_staff")}else{self.ui.backBtn.slideDown("slow");self.ui.tab.removeClass("membership_top_staff")}self.renderTabBottomStaff(self.membershipTabCompositeView);self.bindEvents(self.membershipTabCompositeView)})},renderTabBottomStaff:function(membershipTabCompositeView){var self=this;self.tab.show(membershipTabCompositeView);self.topContainer=false},bindEvents:function(view){var self=this;view.on("changeActiveId",function(data){self.model.set(data)});view.on("changeProfileId",function(data){self.model.set(data)});view.on("allItemShow",function(data){self.afterTabAllRender()})},afterTabAllRender:function(){this.updateDimension();var self=this;var resizeDelay=talent._.debounce(function(){self.updateDimension()},400);$(window).off("resize.membership_page");$(window).on("resize.membership_page",resizeDelay)},renderProfileView:function(){var id=this.model.get("profileId");this.trigger("detailIdChanged",id)},renderActive:function(){var id=this.model.get("activeId");var item=this.ui.tab.find('[data-id="'+id+'"]').find("div:first");if(item.hasClass("active")){return}else{this.ui.tab.find(".active").removeClass("active");item.addClass("active")}},onShow:function(options){this.renderTabView()},showTopStaffView:function(){var userId=talent.Context.getUserInfo().Id;this.model.set({middleId:userId,direction:"2-3"})},getIsMobile:function(){var userAgentInfo=navigator.userAgent;var agents=new Array("Android","iPhone","SymbianOS","Windows Phone","iPad","iPod");var flag=true;for(var v=0;v<agents.length;v++){if(userAgentInfo.indexOf(agents[v])>0){flag=false;break}}return flag},updateDimension:function(){var headH=talent.$("[data-name=header-region]").outerHeight();var mainH=talent.$("#main-region").outerHeight();var containerHeight=talent.$(window).height()-headH;var listHeight=containerHeight-21-talent.$(".membership_tab_top").outerHeight()-talent.$(".membership_bottom").outerHeight()-talent.$(".membership_back").outerHeight();var scrollNode=this.$el.find("#membership_scroll_container");scrollNode.height(listHeight);var isMobile=this.getIsMobile();if(!isMobile){this.tabScroll=new iScroll("membership_scroll_container",{hScrollbar:false,scrollbarClass:"myScrollbar"})}else{scrollNode.scrollable({setStyle:true})}}});return MainView;function animate32(level1Init,level1End,level2Init,level2End,el,next){el.level2.css(level2Init);return[function(){el.level1.css(level1Init).animate(level1End,200,next)},function(){el.level2.animate(level2End,300,next)}]}function animate23(level1Init,level1End,level2Init,level2End,el,next){el.level2.css(level2Init);return[function(){el.level1.hide().toggle("slow",next)},function(){el.level2.animate(level2End,200,next)}]}function animateDefault(level1Init,level1End,level2Init,level2End,el,next){if(el.level1.parents("li").attr("data-id")=="0"){el.level2.css(level2Init);return[function(){el.level1.hide().toggle("slow",next)},function(){el.level2.animate(level2End,200,next)}]}else{el.level2.hide();return[function(){el.level1.hide().toggle("slow",next)},function(){el.level2.hide().toggle("slow",next)}]}}function addAnimate(view,deferred){var direction=view.model.get("direction");var el=findEle(view);el.line.hide();el.level3.hide();var animateList=[];var lastAnimateList=[function(){el.level3.toggle("slow",next)},function(){el.line.toggle("slow",next)},function(){deferred.resolve()}];var level1Init={"margin-left":10,"margin-top":10};var level1End={"margin-left":-5,"margin-top":0};if(direction=="3-2"){var level2Init={"margin-left":10,width:200,height:80,"margin-top":10};var level2End={width:el.level2.width(),height:el.level2.height(),"margin-left":0,"margin-top":0}}else{var level2Init={"margin-left":-20};var level2End={"margin-left":0}}var next=function(){view.$el.dequeue("slideList")};switch(direction){case"3-2":animateList=animate32(level1Init,level1End,level2Init,level2End,el,next);break;case"2-3":animateList=animate23(level1Init,level1End,level2Init,level2End,el,next);break;default:animateList=animateDefault(level1Init,level1End,level2Init,level2End,el,next);break}if(el.level1.parents("li").attr("data-id")=="0"){animateList=animateList.slice(1,animateList.length)}if(el.level1.parents("li").attr("data-id")=="0"&&view.$el.find(".second_ul li:first").attr("data-id")==0){el.level2.css(level2End);animateList=animateList.slice(1,animateList.length)}animateList=animateList.concat(lastAnimateList);view.$el.queue("slideList",animateList);next()}function findEle(view){var level2=view.$el.find(".second_ul>li>div:first");return{level1:view.$el.find(".first_ul>li>div:first"),level2:level2,level3:level2.parent().find(".membership_subordinate_container"),line:view.$el.find(".membership_line")}}function slideDown(el,time,next){var $el=el;var height=$el.attr("init-height");$el.attr("init-height",height);$el.css({height:height}).show("slow").slideDown("slow",next)}function slideUp(el,time,next){var $el=el;var height=$el.height();$el.attr("init-height",height);$el.animate({height:0},time,function(){$el.hide();next()})}});
//# sourceMappingURL=http://sourcemap.beisen.co/ux/tita-web-v4/hotfix/app/scripts/views/common/membership/membership-tab-layout-1607081906.min.map