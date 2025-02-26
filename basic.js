
document.addEventListener("DOMContentLoaded", function() {
	const buttons = document.querySelectorAll(".nav-item");
	const bgImage = document.querySelector("#background-image img");
	const listItems = document.querySelectorAll("li");

	buttons.forEach(button => {
		button.addEventListener("click", function() {
			const imageUrl = this.getAttribute("data-image");
			bgImage.src = imageUrl;
		});
	});
});

// reference: https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener
// I used this to change the background image on the click of the nav-item.



