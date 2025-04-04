document.addEventListener("DOMContentLoaded", async () => {
    const playButton = document.getElementById("play-button");
    const exitButton = document.getElementById("exit-button");
    const secretWordElement = document.getElementById("secret-word");
    const guess = document.getElementById("guess");

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

    const word = await randomWord();
    secretWordElement.textContent = `${secretWordElement.textContent} ${word}`;

    async function randomWord() {
        let word = "";
        try {
            let check = true;
            while (check) {
                const response = await fetch("http://localhost:8080/api/random-word")
                const data = await response.json();            
                if (data && data.word) {
                    word = data.word
                    check = false;
                }
            }
        } catch (error) {
            console.error("Error fetching word", error);
        }
        
        return word;
    }
});
