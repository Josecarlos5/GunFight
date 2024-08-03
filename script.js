const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const bullet1 = document.getElementById('bullet1');
const bullet2 = document.getElementById('bullet2');

let bullet1Interval, bullet2Interval;

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            movePlayer(player1, -10);
            break;
        case 's':
            movePlayer(player1, 10);
            break;
        case 'ArrowUp':
            movePlayer(player2, -10);
            break;
        case 'ArrowDown':
            movePlayer(player2, 10);
            break;
        case 'd':
            fireBullet(bullet1, 5, 'right');
            break;
        case 'ArrowRight':
            fireBullet(bullet2, 5, 'left');
            break;
    }
});

function movePlayer(player, distance) {
    let top = parseInt(window.getComputedStyle(player).top);
    player.style.top = `${top + distance}px`;
}

function fireBullet(bullet, speed, direction) {
    bullet.style.display = 'block';
    let left = parseInt(window.getComputedStyle(bullet).left);

    clearInterval(bullet === bullet1 ? bullet1Interval : bullet2Interval);

    const move = () => {
        left += direction === 'right' ? speed : -speed;
        bullet.style.left = `${left}px`;

        // Check for collision
        if (checkCollision(bullet, direction === 'right' ? player2 : player1)) {
            alert(`${direction === 'right' ? 'Player 1' : 'Player 2'} wins!`);
            resetGame();
        }

        // Reset bullet if it goes out of bounds
        if (left < 0 || left > 800) {
            bullet.style.display = 'none';
            clearInterval(bullet === bullet1 ? bullet1Interval : bullet2Interval);
        }
    };

    bullet === bullet1 ? bullet1Interval = setInterval(move, 30) : bullet2Interval = setInterval(move, 30);
}

function checkCollision(bullet, player) {
    const bulletRect = bullet.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    return (
        bulletRect.left < playerRect.right &&
        bulletRect.right > playerRect.left &&
        bulletRect.top < playerRect.bottom &&
        bulletRect.bottom > playerRect.top
    );
}

function resetGame() {
    bullet1.style.display = 'none';
    bullet2.style.display = 'none';
    clearInterval(bullet1Interval);
    clearInterval(bullet2Interval);
    player1.style.top = '20px';
    player2.style.top = '330px';
    bullet1.style.left = '70px';
    bullet2.style.left = '720px';
}
