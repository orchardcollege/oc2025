const player = document.getElementById("player"); 
const obstacle = document.getElementById("enemy");
const status = document.getElementById("status");

document.addEventListener("keydown", function(e) {
  if (e.code === "Space" || e.code === "ArrowUp") {
    jump();
  }
});

function jump() {
  if (!player.classList.contains("jump")) {
    player.classList.add("jump");
    setTimeout(() => {
      player.classList.remove("jump");
    }, 500);
  }
}

setInterval(() => {
  const playerBottom = parseInt(getComputedStyle(player).getPropertyValue("bottom"));
  const obstacleLeft = parseInt(getComputedStyle(obstacle).getPropertyValue("right"));
  const obstacleRightEdge = 600 - obstacleLeft;

  if (
    obstacleRightEdge > 50 && obstacleRightEdge < 80 && // within player range
    playerBottom < 30 // not jumping
  ) {
    status.textContent = "💥 Game Over! Refresh to try again.";
    obstacle.style.animation = "none";
    obstacle.style.right = `${obstacleRightEdge}px`;
    clearInterval(this);
  }
}, 10);
 