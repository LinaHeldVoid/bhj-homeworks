const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
	const hole = document.getElementById(`hole${index}`);
	return hole;
};

for (let i = 1; i < 10; i++) {
	hole = getHole(i);
	hole.onclick = () => {
		if (hole.classList.contains( 'hole_has-mole' )) {
			dead.textContent = Number(dead.textContent) + 1;
			if (Number(dead.textContent) == 10) {
				alert("Поздравляем, вы выиграли!")
				dead = 0
			};
		} else {
			lost.textContent = Number(lost.textContent) + 1;
			if (Number(lost.textContent) == 5) {
				alert("Сожалеем, вы проиграли(")
				lost = 0
			};
		};
	};
};