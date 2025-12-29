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

// Music Notes Click Effect & Audio
const mainCard = document.getElementById('main-card');
let audioCtx = null;
let noteIndex = 0;

// Für Elise melody frequencies
const furElise = [
    659.25, // E5
    622.25, // D#5
    659.25, // E5
    622.25, // D#5
    659.25, // E5
    493.88, // B4
    587.33, // D5
    523.25, // C5
    440.00  // A4
];

function playNote(frequency) {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.5);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);
}

if (mainCard) {
    mainCard.addEventListener('click', (e) => {
        // Play Audio
        playNote(furElise[noteIndex]);
        noteIndex = (noteIndex + 1) % furElise.length;

        // Visual Effect
        const noteCount = 8;
        const notes = ['♪', '♫', '♬', '♩'];
        for (let i = 0; i < noteCount; i++) {
            const randomNote = notes[Math.floor(Math.random() * notes.length)];
            createNote(e.clientX, e.clientY, randomNote);
        }
    });
}

function createNote(x, y, char) {
    const note = document.createElement('div');
    note.className = 'music-note';
    note.textContent = char;
    document.body.appendChild(note);

    const size = Math.random() * 10 + 20;
    note.style.fontSize = `${size}px`;

    const destinationX = (Math.random() - 0.5) * 400;
    const destinationY = (Math.random() - 0.5) * 400;
    const rotation = (Math.random() - 0.5) * 60;
    const delay = Math.random() * 0.2;

    note.style.left = `${x}px`;
    note.style.top = `${y}px`;
    note.style.transform = 'translate(-50%, -50%)';

    const animation = note.animate([
        { 
            transform: 'translate(-50%, -50%) scale(0.5) rotate(0deg)', 
            opacity: 0 
        },
        { 
            transform: 'translate(-50%, -50%) scale(1.2) rotate(0deg)', 
            offset: 0.2,
            opacity: 1 
        },
        { 
            transform: `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px)) scale(0) rotate(${rotation}deg)`, 
            opacity: 0 
        }
    ], {
        duration: 1200 + Math.random() * 600,
        easing: 'cubic-bezier(0, .9, .57, 1)',
        delay: delay * 1000
    });

    animation.onfinish = () => {
        note.remove();
    };
}