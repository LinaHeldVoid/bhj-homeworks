const arrows = document.querySelectorAll('.slider__arrow');
const slides = document.querySelectorAll('.slider__item');
const slidesArr = Array.from(slides);


function slider() {

	function prewSlide() {
		for (let slide of slidesArr) {
			if (slide.classList.contains('slider__item_active')) {
				let num = slidesArr.indexOf(slide);
				slide.classList.toggle('slider__item_active')

				if (slidesArr[num - 1]) {
					slidesArr[num - 1].classList.toggle('slider__item_active')
				} else {
					slidesArr[slidesArr.length - 1].classList.toggle('slider__item_active')
				}
			}
		}
	}

	function nextSlide(number) {
		for (let slide of slidesArr) {
			if (slide.classList.contains('slider__item_active')) {
				let num = slidesArr.indexOf(slide);
				slide.classList.toggle('slider__item_active')

				if (slidesArr[num + 1]) {
					slidesArr[num + 1].classList.toggle('slider__item_active')
				} else {
					slidesArr[0].classList.toggle('slider__item_active')
				}
			}
		}

	}


	for (let arrow of Array.from(arrows)) {

		arrow.onclick = () => {
			// alert(arrow.classList)

			if (arrow.classList.contains('slider__arrow_next')) {
				nextSlide();
			}
			else {
				prewSlide();
			}
		}
	}

}

slider();