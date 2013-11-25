jQuery.sharedCount = function(url, fn) {
url = encodeURIComponent(url || location.href);
var arg = {
url: "//" + (location.protocol == "https:" ? "sharedcount.appspot" : "api.sharedcount") + ".com/?url=" + url,
cache: true,
dataType: "json"
};
if ('withCredentials' in new XMLHttpRequest) {
arg.success = fn;
}
else {
var cb = "sc_" + url.replace(/\W/g, '');
window[cb] = fn;
arg.jsonpCallback = cb;
arg.dataType += "p";
}
return jQuery.ajax(arg);
};