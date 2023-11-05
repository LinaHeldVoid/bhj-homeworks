const modal = document.querySelector('modal');
const btn = document.querySelector('show-success')
const button = document.querySelector('btn-success');
const close = document.querySelector('modal-close');

btn.onclick = () => {
	alert(button);
}

close.onclick = () => {
	alert(close);
}