function Change(parentName, tagName, parentPro, tagPro) {
	$(parentName).tap(function() {
		$(parentName).removeClass(parentPro),
		$(this).addClass(parentPro),
		$(parentName).find(tagName).removeClass(tagPro),
		$(this).find(tagName).addClass(tagPro)
	})
}Change()
Change('.q-whether-staging span', 'em', 'changeBor', 'changeShow')
Change('.q-whether-stagingO span', 'em', 'changeBor', 'changeShow')
