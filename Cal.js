function openNav() {
	document.getElementById("sidebar").style.width = "350px";
}

function closeNav() {
	document.getElementById("sidebar").style.width = "0";
}

const buttons = document.querySelectorAll("but");
const displays = document.querySelector("#display");

for (let i = 0; i < buttons.legth; i++) {
	buttons[i].addEventListener("click", function() { 
	if (this.id === "AC") {
		displays.value = "";
		} else if (this.id === "=") {
			displays.value = eval(displays.value);
		} else {
			displays.value += this.id;
		}
	});
}