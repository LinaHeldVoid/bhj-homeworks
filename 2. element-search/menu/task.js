const menuBar = document.querySelectorAll('.menu__link');

// function closeSuBs() {
// 	const subs = document.querySelectorAll('.menu_sub');

// 	for (let sub of Array.from(subs)) {
// 		if sub.classList.includes('menu_active') {
// 			sub.classList.toggle('menu_active');
// 		}

// 		return false;
// 	}
// 	return;
// }

for (let menu of Array.from(menuBar)) {

	menu.onclick = () => {
		const subList = menu.closest('.menu__item');
		menuSub = subList.querySelector('.menu_sub');

            if (menuSub) {
            	// closeSuBs
                menuSub.classList.toggle("menu_active");
            }

            return false;

	}
}