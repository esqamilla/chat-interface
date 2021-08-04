// Отправка сообщений
const formButton = document.getElementById('footer__btn');
const textMessage = document.getElementById('footer__textarea');

formButton.addEventListener('click', (e) => {
	const textMessageValue = textMessage.value.trim();

	e.preventDefault();
	
	if (textMessageValue !== '') {
		createMessage(textMessageValue);
	}

	textMessage.value = '';
});

const createMessage = (message) => {
	const chatContainer = document.getElementById('chat__container');
	const item = document.createElement("div");
	const avatarInner = document.createElement('div');
	const contentInner = document.createElement('div');
	const messageInner = document.createElement('div');
	const time = document.createElement('div');

	const now = new Date();
	const h = now.getHours();
	const m = now.getMinutes();
	let clockNow;

	item.className = 'chat__item';
	avatarInner.className = 'chat__avatar';
	contentInner.className = 'chat__content';
	messageInner.className = 'chat__message';
	time.className = 'chat__time';
	
	item.appendChild(avatarInner);
	item.appendChild(contentInner);

	contentInner.appendChild(messageInner);
	contentInner.appendChild(time);

	if (h.length < 2) {
		h = '0' + h;
	}

	if (m.length < 2) {
		m = '0' + m;
	}

	clockNow = h + ':' + m;
	
	messageInner.innerText = message;
	time.innerHTML = clockNow;

	chatContainer.appendChild(item);
	chatContainer.scrollTo(0, 999999);
};