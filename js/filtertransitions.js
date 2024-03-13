var Filter = document.querySelector("#filter");
var About = document.querySelector(".filtrs");
var Projects = document.querySelector(".projtrs");
var MQ = document.querySelector(".mq");

MQ.disabled = true;
Projects.disabled = true;


var clickedEvent = "click"; 
window.addEventListener('touchstart', function detectTouch() {
	clickedEvent = "touchstart"; 
	window.removeEventListener('touchstart', detectTouch, false);
}, false);


About.addEventListener(clickedEvent, function(evt) {
	console.log(clickedEvent);

	if(Filter.getAttribute("class") != "visible") {
		Filter.setAttribute("class", "visible");
		MQ.disabled = false;
		Projects.disabled = false;
		About.disabled = true;
	} else {
		Filter.setAttribute("class", "visible");
	}
	

}, false);

Projects.addEventListener(clickedEvent, function(evt) {
	console.log(clickedEvent);

	if(Filter.getAttribute("class") != "invisible")  {
		Filter.setAttribute("class", "invisible");
		MQ.disabled = true;
		Projects.disabled = true;
		About.disabled = false;
	} else {
		Filter.setAttribute("class", "invisible");
	}
	
}, false);

MQ.addEventListener(clickedEvent, function(evt) {
	console.log(clickedEvent);

	if(Filter.getAttribute("class") != "invisible") {
		Filter.setAttribute("class", "invisible");
		MQ.disabled = true;
		Projects.disabled = true;
		About.disabled = false;
	} else {
		Filter.setAttribute("class", "invisible");
	}
	
}, false);
