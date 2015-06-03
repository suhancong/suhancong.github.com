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

// function Deleted() {
// 	$('.q-del').find('span').tap(function(){
// 		$(this).parents('.q-selected').animate({
// 			'height': 0,
// 			'overflow': 'hidden'
// 		}, 1000)
// 	})
// }Deleted()

function Deleted() {
	$('.q-del').find('span').tap(function(){
		$(this).parents('.q-selected').animate({
			'height': 0,
			'overflow': 'hidden'
		}, 1000)
	})
}Deleted()