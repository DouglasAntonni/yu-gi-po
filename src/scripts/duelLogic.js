// duelLogic.js

const pathImages = "./src/assets/icons";
const cardData = [
    { id: 0, name: "Blue Eyes White Dragon", type: "paper", img: `${pathImages}/dragon.png`, winOf: [1], loseOf: [2] },
    { id: 1, name: "Dark Magician", type: "rock", img: `${pathImages}/magician.png`, winOf: [2], loseOf: [0] },
    { id: 2, name: "Exodia", type: "scissors", img: `${pathImages}/exodia.png`, winOf: [0], loseOf: [1] },
];

// Função para gerar uma carta aleatória
function getrandomCardId() {
    return Math.floor(Math.random() * cardData.length);
}

// Função que cria a imagem de uma carta
function createCardImage(idCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if (fieldSide === state.playerSides.player1) {
        cardImage.addEventListener("mouseover", () => drawnSelectCards(idCard));
        cardImage.addEventListener("click", () => setCardsField(cardImage.getAttribute("data-id")));
    }

    return cardImage;
}

// Lógica do duelo
function checkDuelResults(playerCardId, computerCardId) {
    let duelResults = "DRAW";
    let playerCard = cardData[playerCardId];
    
    if (playerCard.winOf.includes(computerCardId)) {
        duelResults = "WIN";
        state.score.playerScore++;
        playAudio("win");
    }
    if (playerCard.loseOf.includes(computerCardId)) {
        duelResults = "LOSE";
        state.score.computerScore++;
        playAudio("lose");
    }

    return duelResults;
}

// Função para setar cartas no campo
function setCardsField(cardId) {
    removeAllCardsImage();
    let computerCardId = getrandomCardId();
    showHiddenCardFieldImages(true);
    hiddenCardsDetails();
    
    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    let duelResults = checkDuelResults(cardId, computerCardId);
    updateScore();
    drawButton(duelResults);
}
