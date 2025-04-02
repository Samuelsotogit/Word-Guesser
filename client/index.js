document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("play-button");
    const exitButton = document.getElementById("exit-button");

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
});
