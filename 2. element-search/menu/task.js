const menuBar = document.querySelectorAll('.menu__link');

for (menu of Array.from(menuBar)) {

	menu.onclick = () => {
		let menuSub = menu.querySelector('.menu_sub');

            if (menuSub) {
                menuSub.classList.toggle("menu_active");
            }
	}
}

alert(menuBar.textContent)