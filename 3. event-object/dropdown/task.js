const dropdown = document.getElementById("dropdown");
const dropdownList = document.getElementById("dropdown__list");
const value = document.getElementById("value");
const items = document.querySelectorAll(".dropdown__item");

function changeItem() {
	for (let item of Array.from(items)) {

		item.onclick = () => {
			alert(value.textContent)
			alert(item.textContent)
			value.textContent = item.textContent
			alert(value.textContent)
		};
	};
};

dropdown.onclick = () => {

	dropdownList.classList.toggle("dropdown__list_active");

	if (dropdownList.classList.contains("dropdown__list_active")) {
		const subList = dropdown.querySelectorAll(".dropdown__link");
		alert(Array.from(subList))

		for (let sub of subList) {
			sub.onclick = () => {
				value.textContent = sub.textContent
			}
		}

	}
