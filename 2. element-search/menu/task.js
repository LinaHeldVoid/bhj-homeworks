const menuBar = document.querySelectorAll('.menu__link');
const subs = document.querySelectorAll('.menu_sub');
subsArr = Array.from(subs);
menuBarArr = Array.from(menuBar);


// function findSuBsActive(element) {
// 		return element.classList.contains('menu_active')
// 	}

for (let menu of menuBarArr) {

	menu.onclick = () => {

		// num = subsArr.findIndex(findSuBsActive)
		// if (num != -1) {
		// 	alert(num)
		// 	subsArr[num].classList.toggle('menu_active')
		// }

		const subList = menu.closest('.menu__item');
		menuSub = subList.querySelector('.menu_sub');

            if (menuSub) {
                menuSub.classList.toggle('menu_active');

                return false;
            }

	}
}