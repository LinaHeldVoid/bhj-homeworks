tabs = Array.from(document.querySelectorAll('.tab'))
tab_contents = Array.from(document.querySelectorAll('.tab__content'))

for (tab of tabs) {
	tab.onclick = () => {

		tab_active = document.querySelector('.tab_active')
		tab_active.classList.toggle('tab_active')
		content_active = document.querySelector('.tab__content_active')
		content_active.classList.toggle('tab__content_active')

		content_number = tabs.indexOf(tab)

		tabs[content_number].classList.toggle('tab_active')
		tab_contents[content_number].classList.toggle('tab__content_active')
	}
}