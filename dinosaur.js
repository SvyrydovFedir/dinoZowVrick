alert("Ви готові?");

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 500);
}

// перевіряємо зіткнення
function checkCollision() {
  let dinoRect = dino.getBoundingClientRect();
  let cactusRect = cactus.getBoundingClientRect();

  if (
    dinoRect.bottom >= cactusRect.top &&
    dinoRect.right >= cactusRect.left &&
    dinoRect.left <= cactusRect.right
  ) {
    clearInterval(gameInterval);
    alert("Game Over!");
    window.location.reload();
  }
}

checkCollision();

let gameInterval = setInterval(function () {
  checkCollision();
}, 10);
