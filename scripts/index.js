/*! lik 2017-02-23 */
$(function(){function b(){now2=Math.abs(h),i.css("color","#fff"),i.eq(now2).css("color","#ff0")}function c(b){return b=b||event,b.wheelDelta?a=b.wheelDelta>0?1:-1:a=b.detail>0?-1:1,!!g&&(g=!1,void setTimeout(d,500))}function d(){h+=a,h>0?h=0:h<-4&&(h=-4),e(),g=!0}function e(){var a=Math.abs(h);$("li").eq(a).addClass("move"),$("li").eq(a).siblings("li").removeClass("move move2"),$("#ewm").removeClass("change6").addClass("change_6"),4==a&&$("li").eq(4).addClass("move2");var c=100*h+"vh";$("#navDot a").eq(-h).siblings("a").removeClass("active"),$("#navDot a").eq(-h).addClass("active"),$("ul").css({top:c}),$("#navA_hover").css("left",i.eq(-h).offset().left-j),b(),console.log(h)}var f=(document.getElementById("ul"),document.getElementById("navDot").children),g=!0,h=0,i=$("#navHeader").children("a");b();var j=$("#navHeader").offset().left;$("#navHome").hover(function(){$(this).html("首页");var a=$(this).offset().left-j;$("#navA_hover").css("left",a),$(this).click(function(){$("#navA_hover").css("left",a),h=0,e(),b()})},function(){$(this).html("HOME")}),$("#navResume").hover(function(){$(this).html("简历");var a=$(this).offset().left-j;$("#navA_hover").css("left",a),$(this).click(function(){$("#navA_hover").css("left",a),h=-1,e(),b()})},function(){$(this).html("RESUME")}),$("#navSkill").hover(function(){$(this).html("技术控");var a=$(this).offset().left-j;$("#navA_hover").css("left",$(this).offset().left-j),$("#navSkill").click(function(){$("#navA_hover").css("left",a),h=-2,e(),b()})},function(){$(this).html("SKILL")}),$("#navWorks").hover(function(){$(this).html("作品集");var a=$(this).offset().left-j;$("#navA_hover").css("left",a),$(this).click(function(){$("#navA_hover").css("left",a),h=-3,e(),b()})},function(){$(this).html("WORKS")}),$("#navContact").hover(function(){$(this).html("联系我");var a=$(this).offset().left-j;$("#navA_hover").css("left",a),$(this).click(function(){$("#navA_hover").css("left",a),h=-4,e(),b()})},function(){$(this).html("CONTACT")}),$("#navHeader").mouseout(function(){$("#navA_hover").css("left",i.eq(Math.abs(h)).offset().left-j)});var k="undefined"!=typeof document.body.style.MozUserSelect;window.addEventListener(k?"DOMMouseScroll":"mousewheel",c,!1);for(var l=0;l<f.length;l++)f[l].index=l,f[l].onclick=function(){for(var a=0;a<f.length;a++)f[a].className="";h=-this.index,this.className="active",$("#navA_hover").css("left",i.eq(Math.abs(h)).offset().left-j),e(),b()};$("<audio/>").attr({id:"audio",src:"audio/Try_Everything.mp3",loop:"loop",autoplay:"autoplay"}).appendTo($("body"));var m=!0;$("#pause").click(function(){m=!m,m?($("#pauseImg").attr({src:"images/pause.png",title:"静音"}),$("#audio")[0].play()):($("#pauseImg").attr({src:"images/play.png",title:"播放"}),$("#audio")[0].pause())}),$("#resDown").click(function(){var a=prompt("请输入密码(若不知道密码，请联系 Lik ^_^!)");"lik0214"==a?$(this).attr("href","https://lik0214.github.io/download/likWeb求职.docx"):(alert("对不起，密码输入有误！"),$(this).attr("href","javascript:;"))})});