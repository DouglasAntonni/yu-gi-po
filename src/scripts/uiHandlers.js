// uiHandlers.js

const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    playerSides: {
        player1: "player-cards",
        playerBOX: document.querySelector("#player-cards"),
        computer: "computer-cards",
        computerBOX: document.querySelector("#computer-cards"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    },
};

// Função para mostrar ou esconder cartas no campo
function showHiddenCardFieldImages(value) {
    state.fieldCards.player.style.display = value ? "block" : "none";
    state.fieldCards.computer.style.display = value ? "block" : "none";
}

// Função para limpar os detalhes das cartas
function hiddenCardsDetails() {
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";
}

// Função para desenhar cartas no campo do jogador/computador
function drawCards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = getrandomCardId();
        const cardImage = createCardImage(randomIdCard, fieldSide);
        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

// Função que remove todas as imagens de cartas do campo
function removeAllCardsImage() {
    let { computerBOX, playerBOX } = state.playerSides;
    let imgElements = computerBOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    imgElements = playerBOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

// Função que desenha as cartas na mão do jogador
function drawnSelectCards(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerHTML = `${cardData[index].name} <img src="${pathImages}/${cardData[index].type}.png" alt="${cardData[index].type} icon" />`;
    state.cardSprites.type.innerText = "attribute: " + cardData[index].type;
}

// Atualiza o placar
function updateScore() {
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
}

// Exibe o botão "Next Duel" com o resultado e a opção de resetar
function drawButton(text) {
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block";
    state.actions.button.onclick = resetDuel; // Botão de reiniciar duelo
}

function resetDuel() {
    // Limpar sprites da carta e esconder o botão de duelo
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "";
    state.cardSprites.type.innerText = "";
    state.actions.button.style.display = "none";
    
    // Esconder as cartas do campo
    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    // Redesenhar as cartas e reiniciar o jogo
    removeAllCardsImage();
    init();
}
