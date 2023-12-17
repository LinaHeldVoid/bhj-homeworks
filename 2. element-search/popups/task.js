const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById('modal_success');
const btn = document.querySelector('.btn_danger');
const closes = document.querySelectorAll('.modal__close_times');


//управление видимостью окон
function switchModal(modal) {
	modal.classList.toggle('modal_active');
};

//алгоритм
function summonModal() {
	switchModal(modalMain);

	btn.onclick = () => {
		switchModal(modalMain);
		switchModal(modalSuccess);	
	};

	//определяем, какое окно нужно закрыть
	for (let close of closes) {
		close.onclick = () => {
			parentModal = close.closest('.modal')
			switchModal(parentModal);
		}
	}

summonModal();
