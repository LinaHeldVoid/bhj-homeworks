const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
const frequency = document.getElementById("frequency");

cookie.onclick = () => {

	end = new Date;

	counter.textContent = Number(counter.textContent) + 1;
	if (Number(counter.textContent) % 2 !== 0) {
		cookie.width += 20;
		cookie.height += 10;
	} else {
		cookie.width -= 20;
	 	cookie.height -= 10;
	};

	if (typeof start !== 'undefined') {
		frequency.textContent = 1000 / (end - start);
	};
	start = new Date;
};
	