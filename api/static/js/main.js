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

// Red Balls Click Effect
const mainCard = document.getElementById('main-card');

if (mainCard) {
    mainCard.addEventListener('click', (e) => {
        const ballCount = 8;
        for (let i = 0; i < ballCount; i++) {
            createBall(e.clientX, e.clientY);
        }
    });
}

function createBall(x, y) {
    const ball = document.createElement('div');
    ball.className = 'click-ball';
    document.body.appendChild(ball);

    const size = Math.random() * 8 + 6;
    ball.style.width = `${size}px`;
    ball.style.height = `${size}px`;

    const destinationX = (Math.random() - 0.5) * 300;
    const destinationY = (Math.random() - 0.5) * 300;
    const rotation = Math.random() * 360;
    const delay = Math.random() * 0.2;

    ball.style.left = `${x - size / 2}px`;
    ball.style.top = `${y - size / 2}px`;

    const animation = ball.animate([
        { 
            transform: 'translate(0, 0) scale(1)', 
            opacity: 1 
        },
        { 
            transform: `translate(${destinationX}px, ${destinationY}px) scale(0)`, 
            opacity: 0 
        }
    ], {
        duration: 800 + Math.random() * 400,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay * 1000
    });

    animation.onfinish = () => {
        ball.remove();
    };
}