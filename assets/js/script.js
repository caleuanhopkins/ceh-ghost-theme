window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};

document.write(unescape('%3Cscript src="/assets/js/lib/jquery.anystretch.min.js"%3E%3C/script%3E'));
document.write(unescape('%3Cscript src="/assets/js/lib/jquery.sharedcount.js"%3E%3C/script%3E'));
document.write(unescape('%3Cscript src="/assets/js/lib/jquery.fitvids.js"%3E%3C/script%3E'));

var framework = {

	init:function() {
		$('.full-stretch').anystretch();
		$.sharedCount(location.href, function(data){
			$("#twitter").text(data.Twitter);
			$("#facebook").text(data.Facebook.like_count);
			$("#google").text(data.GooglePlusOne);
		});
		$('#post-content').fitVids();
	}
};

var $ = this.jQuery.noConflict();

$(document).ready(function() {
	framework.init();
});