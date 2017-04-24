document.addEventListener('DOMContentLoaded', function () {
	var buttons = document.querySelectorAll('button');
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', click);
	}
});

function click(e) {
	chrome.tabs.executeScript(null,
		{file:"JQuery1.9.1.js"});
	if (e.target.id == 'changeUrl'){	
		chrome.tabs.executeScript(null,
			{file:"replaceUrl.js"});
	} 
	window.close();
}
