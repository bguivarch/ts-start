Problem Statement:  
We will simulate a game where the goal is to kill the enemies by using a tower.
You need to kill enemies faster as possible.
At each turn, first the tower fire one time, then each enemy moves to the tower.
If an enemies reach the tower, you lose.

Input:  
The first line is firing range.
Each next line represents an enemy.
The first column, it’s the enemy name. The second column is the initial distance. And the last column is the speed.

Output:  
At each turn, you will info the killed enemy.  
In the end, you will inform if you win or lose and the count of played turn.
In case of lost, calculate the minimal firing range to win the game against the same enemies.

Sample:  
Sample Input
50m
BotA 100m 10m
BotB 50m 20m
BotC 30m 20m

Sample Output  
The firing range is 50m
Turn 1: Kill BotC at 30m
Turn 2: Kill BotB at 30m
Turn 6: Kill BotA at 50m
You win in 6 turns

Tasks

- Write this game to be executed on NodeJs
- You can write unit tests

Feel free to ask any questions!
