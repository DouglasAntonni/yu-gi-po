// animations.js

function flipCard(card) {
    card.classList.add('flip');
    setTimeout(() => card.classList.remove('flip'), 1000);
}

function selectCard(card) {
    card.classList.add('selected');
    setTimeout(() => card.classList.remove('selected'), 1000);
}

function battleResult(card, result) {
    card.classList.add(result); // Adiciona 'win' ou 'lose'
    setTimeout(() => card.classList.remove(result), 1000);
}

function updateEnergyBar(energyElement, energyLevel) {
    energyElement.style.width = `${energyLevel}%`;
    if (energyLevel < 30) {
        energyElement.classList.add('low');
    }
}

// Áudio para vitória e derrota
async function playAudio(status) {
    const audio = new Audio(`./src/assets/audios/${status}.wav`);
    audio.play();
}
