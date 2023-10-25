const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
	const hole = document.getElementById(`hole${index}`);
	return hole;
};

while (Number(dead.textContent) < 10 && Number(lost.textContent) < 5) {
	for (let i = 0; i < 9; i++) {
		hole = getHole[i];
		hole.onclick = () => {
			if (hole.className.includes("hole_has-mole")) {
				dead.textContent = Number(dead.textContent) + 1;
			} else {
				lost.textContent = Number(lost.textContent) + 1;
			};
		};
	}
};