
document.addEventListener("DOMContentLoaded", function() {
	const buttons = document.querySelectorAll(".nav-item");
	const bgImage = document.querySelector("#background-image img");

	buttons.forEach(button => {
		button.addEventListener("click", function() {
			const imageUrl = this.getAttribute("data-image");
			bgImage.src = imageUrl;
		});
	});
});