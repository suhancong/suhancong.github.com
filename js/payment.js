$('.q-payment-nav dl').on("tap", function() {
	$(this).children('dd').css('color', "#ff6766"),
	$(this).siblings('dl').children('dd').css('color', "#94846e"),
	$('.q-payment-nav dl').children('dt').removeClass("change"),
	$(this).children('dt').addClass("change"),
	$(this).siblings('dl').children('dd').children('.q-point').css("display", "none")
	$(this).children('dd').children('.q-point').css("display", "block")
})
