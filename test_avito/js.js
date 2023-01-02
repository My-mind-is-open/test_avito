let btn = document.querySelector('.btn');
let touch__form = document.querySelector('.touch__form');
let close__form = document.querySelector('.close__form');
alert('(Сделал за 30 минут, извините за дизайн, много работы сейчас:(')
btn.addEventListener('click', () => {
	btn.style = "display:none"
	touch__form.style = "display:flex";
	close__form.style = 'display:block'
	alert('Форма в консоли')
})
close__form.addEventListener('click', () => {
	close__form.style = 'display:none'
	touch__form.style = "display:none"
	btn.style = "display:block"
})
function retrieveFormValue(event) {

	event.preventDefault();

	const fields = document.querySelectorAll("input");
	const values = {};
	fields.forEach(field => {
		const { name, value } = field;
		values[name] = value;

	});
	console.log(values);
}

touch__form.addEventListener('submit', retrieveFormValue);