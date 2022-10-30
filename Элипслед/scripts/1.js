   /* Меню бургер */

const btn = document.querySelector('.header_btn');
if (btn) {
	const items = document.querySelector('.items');
	const header = document.querySelector('.header');	
	btn.addEventListener("click", function () {
		document.body.classList.toggle('_lock');
		btn.classList.toggle('_active');
		items.classList.toggle('_active');
		header.classList.toggle('_active');
	});
}
