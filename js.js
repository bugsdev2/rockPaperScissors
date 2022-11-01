
const options = document.querySelectorAll('.option-window img')

options.forEach(option => option.addEventListener('click', test))

function test(e) {
	console.log(e.target);
}

