function changeWid() {
	var outer = $('.wrap');
	var header = $('header') 
	var htm = $("html");
	var htmWid = $("html").width();
	var scale = 640 / 40 ;
	function initial() {
		if (htmWid >= 640) {
			outer.css({
				width : "640px",
				margin : "0 auto"
			})
			header.css({
				width : "640px",
				left: "50%",
				top: "0",
				margin: "0 0 0 -320px"
			})
			htm.css({
				"font-size" : "40px"
			})
		}else if(htmWid <= 320) {
			htm.css({
				"font-size" : "20px"
			})
		}else{
			htm.css({
				"font-size" : htmWid / scale + "px"
			})
		}
	}initial();
}changeWid();
$(window).resize(changeWid);
/*移动端窗口响应式 end*/

/*confirm_pay 页面js效果 start*/
function Change(parentName, tagName, parentPro, tagPro) {
	$(parentName).tap(function() {
		$(parentName).removeClass(parentPro),
		$(this).addClass(parentPro),
		$(parentName).find(tagName).removeClass(tagPro),
		$(this).find(tagName).addClass(tagPro)
	})
}Change()

Change('.q-payments span', 'em', 'changeBor', 'changeShow');
Change('.q-whether-staging span', 'em', 'changeBor', 'changeShow')

/*confirm_pay end*/

/*shopping_list start*/
Change('.q-whether-staging span', 'em', 'changeBor', 'changeShow')
Change('.q-whether-stagingO span', 'em', 'changeBor', 'changeShow')

/*shopping_list end*/

/*details 页面效果 start*/

function Selected() {
	var spanSel = $(".q-info span")
	spanSel.on("tap", function() {
		$(this).toggleClass("select")
	})
	$('.q-total span').on("tap", function() {
		spanSel.toggleClass("select"),
		$(this).toggleClass("select")
		console.log("11")
	})
}Selected()

function Deleted() {
	$('.q-del').find('span').tap(function(){
		$(this).parents('.q-selected').animate({
			'height': 0,
			'overflow': 'hidden'
		}, 1000)
	})
}Deleted()

/*details 页面效果 end*/

/*payment 页面效果 start*/

$('.q-payment-nav dl').on("tap", function() {
	$(this).children('dd').css('color', "#ff6766"),
	$(this).siblings('dl').children('dd').css('color', "#94846e"),
	$('.q-payment-nav dl').children('dt').removeClass("change"),
	$(this).children('dt').addClass("change"),
	$(this).siblings('dl').children('dd').children('.q-point').css("display", "none")
	$(this).children('dd').children('.q-point').css("display", "block")
})

/*payment 页面效果 end*/


/*unpaid start*/

$(function(){
    tabs($(".q-payment-nav dl"), $('.q-payment-con')); 
})
var tabs = function(tab, con){
    tab.tap(function(){
        var indx = tab.index(this);
        tab.removeClass('current');
        $(this).addClass('current');
        con.hide();
        con.eq(indx).show();
    })    
};

/*unpaid end*/
