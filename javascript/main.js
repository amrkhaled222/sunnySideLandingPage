let span = document.querySelector(".menuActivation"),
	menu = document.querySelector(".headerMenu");

span.onclick = function (e) {
	menu.classList.toggle("active");
	span.classList.toggle("burgericoncolor");
};
