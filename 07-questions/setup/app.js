//using selectors inside the element
// traversing the dom

document.querySelectorAll(".question-btn").forEach(btn => {
	btn.addEventListener("click", function() {
		btn.parentNode.parentNode.classList.toggle("show-text");
	});
});