const users = [
	'petr',
	'jana-34',
	'husky16',
	'66beruska',
	'thegodofU',
	'rene_gade',
	'tommy',
	'luciluci',
	'tanko',
	'poltergeist',
	'hlava-havla',
	'telo-ramba',
]

const regFormElm = document.querySelector('.reg-form');
const usernameElm = document.querySelector('#username');
const pass1Elm = document.querySelector('#pass1');
const pass2Elm = document.querySelector('#pass2');
const errorElm = document.querySelector('.reg-form__error');
const newElm = document.createElement("div");

const process = (event) => {
    event.preventDefault();

	if (usernameElm.value === '') {
		errorElm.textContent = 'Vyplňte uživatelské jméno.';
		return;
	} else if (users.includes(usernameElm.value)) {
		errorElm.innerHTML = `Uživatel <strong>„${username.value}“</strong> již existuje.`;
		return;
	}

	validator(pass1Elm.value);
	conformity(pass2Elm.value);

	errorElm.textContent = ' ';
	console.log('OK');
	newElm.style.color = 'green';
	newElm.innerHTML = `Registrace uživatele <strong>„${usernameElm.value}“</strong> proběhla úspěšně.`;
	errorElm.after(newElm);
	usernameElm.value = pass1Elm.value = pass2Elm.value = '';
	pass1Elm.classList.remove('akcept');
}

regFormElm.addEventListener('submit', process);

const validator = (event) => {
	if (pass1Elm.value === '') {
		errorElm.textContent = 'Vytvořte heslo.';
	} else if (pass1Elm.value.length < 10 || (!pass1Elm.value.includes('-') && !pass1Elm.value.includes('_') && !pass1Elm.value.includes(':'))) {
        pass1Elm.classList.add('error');
        pass1Elm.classList.remove('akcept');
		errorElm.textContent = 'Heslo není bezpečné.';
        console.log('KO');
    } else {
        pass1Elm.classList.remove('error');
        pass1Elm.classList.add('akcept');
        console.log('OK')
		errorElm.style.color = 'green';
		errorElm.textContent = 'Heslo je dostatečně bezpečné.';
    }
    console.log(event.target.value);
}

pass1Elm.addEventListener('input', validator);

const conformity = (event) => {
    if (pass2Elm.value === '' || (pass2Elm.value !== pass1Elm.value)) {
		errorElm.textContent = 'Zadaná hesla se neshodují.';
        console.log('KO');
    } else {
		errorElm.textContent = ' ';
	}
    console.log(event.target.value);
}

pass2Elm.addEventListener('input', conformity);