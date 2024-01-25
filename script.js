const ball = document.getElementById('ball');
let positionX = 50;
let positionY = 50;
let speedX = 5;
let speedY = 5;


function updateBall() {
  positionX += speedX;
  positionY += speedY;

  if (positionX + ball.clientWidth >= window.innerWidth || positionX <= 0) {
    speedX = -speedX;
  }

  if (positionY + ball.clientHeight >= window.innerHeight || positionY <= 0) {
    speedY = -speedY;
  }

  ball.style.left = `${positionX}px`;
  ball.style.top = `${positionY}px`;
}

function animate() {
  updateBall();
  requestAnimationFrame(animate);
}

animate();
