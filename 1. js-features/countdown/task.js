const p = document.getElementById("timer");
timer = (Number(p.textContent) + 1) * 1000;

//таймер//
setInterval(() => {
		if (p.textContent > 0) {
			p.textContent = Number(p.textContent) - 1
		}
	}, 1000);

//окно с сообщением//
setTimeout(() => {
	alert("Вы выиграли в конкурсе;)")
	}, timer);
