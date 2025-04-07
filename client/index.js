document.addEventListener("DOMContentLoaded", async () => {
    const bodyId = document.body.id;
    if (bodyId === "home-page") {
        const playButton = document.getElementById("play-button");
        if (playButton) {
            playButton.addEventListener("click", () => {
                window.location.href = "game.html";
            });
        }
    } else if (bodyId === "game-page") {
        const exitButton = document.getElementById("exit-button");
        const form = document.querySelector("form");
        const secretWordElement = document.getElementById("secret-word");
        const lettersGuessedElement = document.getElementById("letters-guessed");
        const triesElement = document.getElementById("tries");
        const input = document.getElementById("guess-input");
        let word = await randomWord();
        const wordChars = word.split("");
        const unguessedChars = Array(word.length).fill("_");
        const lettersGuessed = [];
        let count = 0;
        secretWordElement.textContent = unguessedChars.join(" ");
        lettersGuessedElement.textContent = lettersGuessed.join(" ");
        triesElement.textContent = count;
        
        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault();
                const guess = input.value.trim().toLowerCase();
                input.value = "";

                if (count >= 7) {
                    alert(`Took too many attempts! The word was '${word}'.\nGame over.`)
                    history.back();
                }

                if (guess.length !== 1 || !/^[a-z]$/.test(guess)) {
                    alert("Please enter a valid letter as a guess")
                    return;
                }

                if (lettersGuessed.includes(guess)) {
                    alert("You already guessed this!")
                    return;
                }

                lettersGuessed.push(guess);

                if (!wordChars.includes(guess)) {
                    count++;
                }

                updateArray(guess, wordChars, unguessedChars);

                secretWordElement.textContent = unguessedChars.join(" ");
                lettersGuessedElement.textContent = lettersGuessed.join(" ");
                triesElement.textContent = count;

                if (!unguessedChars.includes("_")) {
                    setTimeout(()=> {
                        alert("Congratulations! You Win!")
                        history.back();
                    }, 100);   
                }
            }); 
        }

        if (exitButton) {
            exitButton.addEventListener("click", () => {
                history.back();
            });
        }

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

        function updateArray(character, charArray, unguessedArray) {
            let i=0
            while ( i < charArray.length ) {
                if (character == charArray[i]) {
                    unguessedArray[i] = character;
                }
                i++;
            }
        }
    }
});
