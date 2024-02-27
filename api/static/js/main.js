const animatedText = document.getElementById('animated-text');
const phrases = ['Hi my name is Ritom Sen','It is pronounced like Ree-Thum', 'Some friends call me Tem', 'My parents call me Zico'];
let index = 0;

function animateText() {
	const currentPhrase = phrases[index];
	const interval = 100;

	for (let i = 0; i <= currentPhrase.length; i++) {
		setTimeout(() => {
			animatedText.textContent = currentPhrase.slice(0, i);
		}, i * interval);
	}

	setTimeout(() => {
		deleteText();
	}, currentPhrase.length * interval + 1000); // Add a delay before deleting
}

function deleteText() {
	const currentPhrase = phrases[index];

	for (let i = currentPhrase.length; i >= 0; i--) {
		setTimeout(() => {
			animatedText.textContent = currentPhrase.slice(0, i);
		}, (currentPhrase.length - i) * 50);
	}

	setTimeout(() => {
		index = (index + 1) % phrases.length;
		animateText();
	}, currentPhrase.length * 50 + 1000); // Add a delay before starting the next phrase
}

// Initial animation start
animateText();