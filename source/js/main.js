let burger = document.querySelector(".main-nav__burger");
let navigation = document.querySelector(".main-nav");

let toggleMenu = (evt, button, nav) => {
	evt.preventDefault();
	button.classList.toggle("button-burger--open");
	nav.classList.toggle("main-nav--menu-open")
	let attributeValue;

	button.classList.contains("button-burger--open")
		?
			(attributeValue = "false")
		:
			(attributeValue = "true");

	button.setAttribute("aria-expanded", attributeValue);
}

if (burger) {
	burger.addEventListener("click", (evt) => {
		toggleMenu(evt, burger, navigation);
	});
}