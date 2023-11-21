const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById('modal_success');
const btn = document.querySelector('.btn_danger');
const close = document.querySelectorAll('.modal__close_times');

close1 = close[0];
close2 = close[1];

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

	close1.onclick = () => {
		switchModal(modalMain);
	};

	close2.onclick = () => {
		switchModal(modalSuccess);
	};
};

summonModal();
