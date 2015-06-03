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

