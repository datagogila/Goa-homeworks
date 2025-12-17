let score = 0;

const choices = ["rock", "paper", "scissors"];

document.querySelectorAll(".choice").forEach(btn => {
    btn.addEventListener("click", () => {
        playGame(btn.dataset.choice);
    });
});

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "draw";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "win";
        score++;
    } else {
        result = "lose";
        score--;
    }

    document.getElementById("score").textContent = score;
}
