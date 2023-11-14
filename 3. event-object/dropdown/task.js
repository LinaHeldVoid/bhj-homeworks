const dropdown = document.getElementById("dropdown");
const dropdown_list = document.getElementById("dropdown__list");
// const value = document.getElementById("value");
// const items = document.querySelectAll("dropdown__link");

// function changeItem() {
// 	for (let i = 0; i < 4; i++) {
// 		const item = items[i]

// 		item.onclick = () => {
// 			value.textContent = item.textContent
// 		};
// 	};
// };

dropdown.onclick = () => {

	if (dropdown_list.className == "dropdown__list") {
		dropdown_list.classList.add("dropdown__list_active");
		}
	else {
		// changeItem
		dropdown_list.className = "dropdown__list"
		};
};