const arrows = document.querySelectorAll('.slider__arrow');
const slides = document.querySelectorAll('.slider__item');
const slidesArr = Array.from(slides);


function slider() {

//находим индекс активного слайда
	function activeSlide(element) {
		return element.classList.contains('slider__item_active')
	}

//находим и активируем предыдущий слайд
	function prewSlide(number) {
		
		number === 0 ? slidesArr[slidesArr.length - 1].classList.toggle('slider__item_active') 
		: slidesArr[number - 1].classList.toggle('slider__item_active')

	}
//находим и активируем следующий слайд
	function nextSlide(number) {

		number === slidesArr.length - 1 ? slidesArr[0].classList.toggle('slider__item_active') 
		: slidesArr[number + 1].classList.toggle('slider__item_active')

	}


//обработчик событий в браузере
	for (let arrow of Array.from(arrows)) {

		arrow.onclick = () => {

			//отключаем активный слайд
			num = slidesArr.findIndex(activeSlide)
			slidesArr[num].classList.toggle('slider__item_active')

			//определяем направление смены слайдов
			if (arrow.classList.contains('slider__arrow_next')) {
				nextSlide(num);
			}
			else {
				prewSlide(num);
			}
		}
	}

}

slider();