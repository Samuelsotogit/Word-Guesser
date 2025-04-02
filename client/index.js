document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play-button");
    const exitButton = document.getElementById("exit-button");
    const secretWordElement = document.getElementById("secret-word");
    const guess = document.getElementById("guess");
    const word = randomWord();

    if (playButton) {
        playButton.addEventListener("click", () => {
            window.location = "game.html";
        });
    }

    if (exitButton) {
        exitButton.addEventListener("click", () => {
            history.back();
        });
    }

    secretWordElement.textContent = `${secretWordElement.textContent} ${word}`;

    async function randomWord() {
        var check = true;
        while (check) {
            const response = await fetch("https://random-word-api.vercel.app/api?words=1")
            const word = response.json;            
            if (word != null) {
                check = false;
            }
        }
    }
});
