const modal = document.querySelector('modal');
const btn = document.querySelector('btn-danger')
const button = document.querySelector('btn-success');
const close = document.querySelector('modal-close');

function press_button() {
	alert(button)
};

btn.onclick = press_button;

function close() {

}