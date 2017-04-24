function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


chrome.tabs.query({}, function(tabs) {
	var a = getRandomInt(1,9);
	for (var i = 0; i<tabs.length;i++){
		var newUrl = encodeURIComponent(tab.url);
		newUrl = newUrl.replace("www","www"+a);	
	}
} );