const dropdown = document.getElementById("dropdown");
const dropdownList = document.getElementById("dropdown__list");
const value = document.getElementById("value");
const items = document.querySelectorAll(".dropdown__item");

function changeItem() {
	dropdown.onclick = () => {
		dropdownList.classList.toggle("dropdown__list_active");
		}


	for (let item of items) {

		item.onclick = () => {
			value.textContent = item.textContent
			console.log(value.textContent)
			console.log(item.textContent)
			return false;
		};
	};
};

changeItem()