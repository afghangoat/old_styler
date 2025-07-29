javascript:(function() {
	function changeBackgroundsToRandomColors(elements) {
    elements.forEach(function(element) {
		element.style.backgroundColor = rndclr();
		element.style.color = '#336699';
		element.style.fontFamily = 'Comic Sans MS, Arial, sans-serif';
		element.style.border = '2px solid #ff9900';
    });}
	function rndclr() {
		return ('#' + Math.floor(Math.random() * 16777215).toString(16));
	}
	const elementsToStyle = document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, a, section, div, li, ul, ol, hr, br, em, strong');
	changeBackgroundsToRandomColors(elementsToStyle);
})();