// function Staging() {
// 	// $('.q-whether-staging').find('span').tap(function() {
// 	// 	$('.q-whether-staging').find('span').removeClass('changeBor'),
// 	$('.q-whether-staging span').tap(function() {
// 		$('.q-whether-staging span').removeClass('changeBor'),
// 		$(this).addClass('changeBor'),
// 		$('.q-whether-staging').find('em').removeClass('changeShow'),
// 		$(this).find('em').addClass('changeShow')
// 	})
// }Staging()

// function Bank() {
// 	$('.q-payments span').tap(function() {
// 		$('.q-payments span').removeClass('changeBor'),
// 		$(this).addClass('changeBor'),
// 		$('.q-payments span').find('em').removeClass('changeShow'),
// 		$(this).find('em').addClass('changeShow')
// 	})
// }Bank()

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