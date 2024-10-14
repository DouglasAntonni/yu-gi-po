window.onload = function() {
    const state = {
        score: {
            playerScore: 0,
            computerScore: 0,
            scoreBox: document.getElementById("score_points"),
        },
        cardSprites: {
            avatar: document.getElementById("card-image"),
            name: document.getElementById("card-name"),
            type: document.getElementById("card-type")
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
        }
    };

    const pathImages = "./src/assets/icons";
    const cardData = [
        {
            id: 0,
            name: "Blue Eyes White Dragon",
            type: "paper",
            img: `${pathImages}/dragon.png`,
            winOf: [1],
            loseOf: [2]
        },
        {
            id: 1,
            name: "Dark Magician",
            type: "rock",
            img: `${pathImages}/magician.png`,
            winOf: [2],
            loseOf: [0]
        },
        {
            id: 2, 
            name: "Exodia",
            type: "scissors",
            img: `${pathImages}/exodia.png`,
            winOf: [0],
            loseOf: [1]
        },
    ];

    function getrandomCardId() {
        const randomIndex = Math.floor(Math.random() * cardData.length);
        return cardData[randomIndex].id;
    }

    function createCardImage(idCard, fieldSide) {
        const cardImage = document.createElement("img");
        cardImage.setAttribute("height", "100px");
        cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
        cardImage.setAttribute("data-id", idCard);
        cardImage.classList.add("card");

        if (fieldSide === state.playerSides.player1) {
            cardImage.addEventListener("mouseover", () => {
                drawnSelectCards(idCard);
            });
            cardImage.addEventListener("click", () => {
                setCardsField(cardImage.getAttribute("data-id"));
            });
        }

        return cardImage;
    }

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
    function showHiddenCardFieldImages(value) {
        if (value === true) {
            state.fieldCards.player.style.display = "block";
            state.fieldCards.computer.style.display = "block";
        }
        if (value === false) {
            state.fieldCards.player.style.display = "none";
            state.fieldCards.computer.style.display = "none";
        }
    }
    function hiddenCardsDetails() {
        state.cardSprites.avatar.src ="";
        state.cardSprites.name.innerText = "";
        state.cardSprites.type.innerText ="";
    }
    function drawButton(text) {
        state.actions.button.innerText = text.toUpperCase();
        state.actions.button.style.display = "block";
        
        // Adicionando o evento de clique no botão para reiniciar o duelo
        state.actions.button.onclick = resetDuel;
    }

    function updateScore() {
        state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`;
    }

    function checkDuelResults(playerCardId, computerCardId) {
        let duelResults = "DRAW";
        let playerCard = cardData[playerCardId];
        if (playerCard.winOf.includes(computerCardId)) {
            duelResults = "WIN";
            playAudio(duelResults);
            state.score.playerScore++;
        }
        if (playerCard.loseOf.includes(computerCardId)) {
            duelResults = "LOSE";
            playAudio(duelResults);
            state.score.computerScore++;
        }
        return duelResults;
    }

    function removeAllCardsImage() {
        let { computerBOX, playerBOX } = state.playerSides;
        let imgElements = computerBOX.querySelectorAll("img");
        imgElements.forEach((img) => img.remove());

        imgElements = playerBOX.querySelectorAll("img");
        imgElements.forEach((img) => img.remove());
    }

    function drawnSelectCards(index) {
        state.cardSprites.avatar.src = cardData[index].img;
        state.cardSprites.name.innerText = cardData[index].name;
        state.cardSprites.type.innerText = "attribute: " + cardData[index].type;
    }

    function drawCards(cardNumbers, fieldSide) {
        for (let i = 0; i < cardNumbers; i++) {
            const randomIdCard = getrandomCardId();
            const cardImage = createCardImage(randomIdCard, fieldSide);
            document.getElementById(fieldSide).appendChild(cardImage);
        }
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
    async function playAudio(status) {
        const audio = new Audio(`./src/assets/audios/${status}.wav`);
        
        audio.play();
    }
    const bgm = document.getElementById("bgm")
    //bgm.play();
    
              
    function init() {
        
        showHiddenCardFieldImages();
        drawCards(5, state.playerSides.player1);
        drawCards(5, state.playerSides.computer);
    }

    init();
};
