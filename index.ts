type Enemy = {
  name: string;
  position: number;
  move: number;
  score?: number;
};
const input: Enemy[] = [
  { name: "BotA", position: 100, move: 10 },
  { name: "BotB", position: 50, move: 50 },
  { name: "BotC", position: 50, move: 50 },
  { name: "BotD", position: 30, move: 10 },
  { name: "BotE", position: 10, move: 60 },
  { name: "BotF", position: 30, move: 5 },
];

const getClosestEnemies = (enemies: Enemy[]) => {
  const scoredEnemies = enemies.map((enemy) => {
    const score = enemy.position / enemy.move;
    return {
      ...enemy,
      score,
    };
  });
  const closestEnemies = scoredEnemies.sort((a, b) => a.score - b.score);
  return closestEnemies;
};

const move = (enemies: Enemy[]) => {
  return enemies.map((enemy) => {
    const nextPosition = Math.max(0, enemy.position - enemy.move);
    return {
      ...enemy,
      position: nextPosition,
    };
  });
};

const handleEnemiesAttack = (enemies: Enemy[]) => {
  return enemies.filter((enemy) => enemy.position === 0);
};

const handleTowerFire = (shotRange: number, enemies: Enemy[]) => {
  let survivors: Enemy[];
  const [closestEnemy, ...followingEnemies] = getClosestEnemies(enemies);

  if (closestEnemy.position <= shotRange) {
    console.log(
      `${closestEnemy.name} at position ${closestEnemy.position} killed`
    );
    survivors = followingEnemies;
  } else {
    survivors = [closestEnemy, ...followingEnemies];
  }
  return survivors;
};

const playGame = (shotRange: number, enemies: Enemy[], round: number = 1) => {
  // Tower fire on the enemy
  const survivors = handleTowerFire(shotRange, enemies);
  if (!survivors.length) {
    // Means all enemies are defeated
    console.log(`Tower wins in ${round} round(s) `);
    return;
  }

  // Enememies try to reach the tower
  const criticalAttackers = handleEnemiesAttack(survivors);
  if (criticalAttackers.length) {
    criticalAttackers.forEach(({ name }) =>
      console.log(`${name} reach the tower at round ${round}`)
    );
    return;
  }
  // Enememies take a step forward towards the Tower
  const nextWave = move(survivors);
  round++;

  // Play the next game
  playGame(shotRange, nextWave, round);
};

playGame(50, input);
