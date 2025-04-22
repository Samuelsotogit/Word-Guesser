document.addEventListener("DOMContentLoaded", async () => {
    const bodyId = document.body.id;
    if (bodyId == "menu-page") {
        const easyButton = document.getElementById("easy-button");
        const normalButton = document.getElementById("normal-button");
        const hardButton = document.getElementById("hard-button");
        if (easyButton) {
            easyButton.addEventListener("click", () => {
                window.location.href = "game.html?difficulty=easy";
            });  
        }
        if (normalButton) {
            normalButton.addEventListener("click", () => {
                window.location.href = "game.html?difficulty=normal"
            });
        }
        if (hardButton) {
            hardButton.addEventListener("click", () => {
                window.location.href = "game.html?difficulty=hard"
            });
        }
    }
})