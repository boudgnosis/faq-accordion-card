const ELEMENTOS_ACORDEON = document.querySelectorAll('#accordion');

// ELEMENTOS_ACORDEON.addEventListener('click', () => {
// 	
// })

for (let i = 0; i < ELEMENTOS_ACORDEON.length; i++) {
  ELEMENTOS_ACORDEON[i].addEventListener("click", function () {
		this.classList.toggle("accordion__menus-titles-active");
		let panelOpen = this.nextElementSibling;
    if (panelOpen.style.display == "none") {
			panelOpen.classList.toggle("active");
    } else {
			panelOpen.classList.toggle("active");
    }
  });
}
