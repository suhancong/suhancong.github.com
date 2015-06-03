$(function(){
    tabs($(".q-payment-nav dl"), $('.q-payment-con')); 
})
var tabs = function(tab, con){
    tab.click(function(){
        var indx = tab.index(this);
        tab.removeClass('current');
        $(this).addClass('current');
        con.hide();
        con.eq(indx).show();
    })    
};

$('.q-payment-nav dl').on("tap", function() {
	$(this).children('dd').css('color', "#ff6766"),
	$(this).siblings('dl').children('dd').css('color', "#94846e"),
	$('.q-payment-nav dl').children('dt').removeClass("change"),
	$(this).children('dt').addClass("change"),
	$(this).children('dd').children('.q-point').css("display", "block"),
	$(this).siblings('dl').children('dd').children('.q-point').css("display", "none")
})
