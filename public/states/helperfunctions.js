const collectDoggo2 = (player2, doggo) => {
  if (!player2.hasOverlapped && !doggo.hasOverlapped) {
    player2.hasOverlapped = doggo.hasOverlapped = true;
    doggo.kill();
    //updates score
    score2 += 1;
    scoreText2.text = `P2 score: ${score2}`;
  } else {
    player2.hasOverlapped = doggo.hasOverlapped = false;
  }
}
const collectDoggo1 = (player, doggo) => {
  if (!player.hasOverlapped && !doggo.hasOverlapped) {
    player.hasOverlapped = doggo.hasOverlapped = true;
    doggo.kill();
    //updates score
    score += 1;
    scoreText.text = `P1 score: ${score}`;
  } else {
    player.hasOverlapped = doggo.hasOverlapped = false;
  }
}