document.addEventListener('DOMContentLoaded', function () {
	var buttons = document.querySelectorAll('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', click);
	}
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function click(e) {
	if (e.target.id == 'reload'){	
		var fourmTabs = new Array();
		var a = getRandomInt(1,9);
		chrome.tabs.query({lastFocusedWindow: true}, function (tabs) {
			for (var i = 0; i < tabs.length; i++) {
				fourmTabs[i] = tabs[i];
			}
			for (var i = 0; i < fourmTabs.length; i++) {
				if (fourmTabs[i] != null){
					var newUrl = fourmTabs[i].url;
					console.log(newUrl);
					newUrl = newUrl.replace("www","www"+a);
					chrome.tabs.update(fourmTabs[i].id, {url: newUrl});
				}
			}
		});
	} 
}
