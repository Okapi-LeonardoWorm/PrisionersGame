import player1 from './player1.js';
import cheatAlways from './player-1.js';
import playerAlternate from './playerAlternate.js';
import playerEnemyOpposite from './playerEnemyOpposite.js';


const players = [player1, cheatAlways, playerAlternate, playerEnemyOpposite]; // Array of players
const rounds = 200; // Number of rounds to play


function generateRounds(average = rounds, random = true) {
    if (random) {
        return Math.floor(Math.random() * 10 + average);
    }
    return Math.floor(average);
}


class Game {
    constructor(player1, player2, rounds) {
        this.rounds = rounds;
        
        this.player1 = player1;
        this.player1Score = 0;
        
        this.player2 = player2;
        this.player2Score = 0;

        this.rounds = [];
        this.scores = [];

        // this.playGame();
        // this.getResults();
        // this.getWinner();
    }

    playRound(p1mv, p2mv) {
        if (p1mv === 1 && p2mv === 1) {
            this.player1Score += 3;
            this.player2Score += 3;

            this.scores.push([3,3]);
        } else if (p1mv === -1 && p2mv === -1) {
            this.player1Score += 1;
            this.player2Score += 1;

            this.scores.push([1,1]);
        } else if (p1mv === 1 && p2mv === -1) {
            this.player1Score += 0;
            this.player2Score += 5;

            this.scores.push([0,5]);
        } else if (p1mv === -1 && p2mv === 1) {
            this.player1Score += 5;
            this.player2Score += 0;

            this.scores.push([5,0]);
        }

        this.rounds.push([p1mv, p2mv]);

        return [this.player1Score, this.player2Score];
    }

    playGame() {
        for (let i = 0; i < this.rounds.length; i++) {
            if (i == 0) {
                let p1mv = this.player1.firstMove;
                let p2mv = this.player2.firstMove;

                this.playRound(p1mv, p2mv);
            } else{
                let p1mv = this.player1.strategy(this.rounds[i-1][1]);
                let p2mv = this.player2.strategy(this.rounds[i-1][0]);
                
                console.log("AQUI1", this.rounds[i-1][1]);
                console.log("AQUI2", this.rounds[i-1][0]);

                console.log("AQUI3", p1mv);
                console.log("AQUI4", p2mv);

                this.playRound(p1mv, p2mv);
            }
        }
    }

    getResults() {
        console.log(`Player 1: ${this.player1.name} - ${this.player1Score} points\n\n`);
        console.log(`Player 2: ${this.player2.name} - ${this.player2Score} points\n\n`);
        console.log(`Rounds: ${this.rounds}\n\n`);
        console.log(`Scores: ${this.scores}\n\n`);
    }

    getWinner() {
        if (this.player1Score > this.player2Score) {
            console.log(`Player 1: ${this.player1.name} wins!\n\n`);
        } else if (this.player1Score < this.player2Score) {
            console.log(`Player 2: ${this.player2.name} wins!\n\n`);
        } else {
            console.log('It is a tie\n\n');
        }
    }
}


function runAllPlayers(fac, player1, players) {
    for (let i =0; i < players.length; i++) {
        if (fac > 1) {
            fac--;
            continue;
        } else {
            let player2 = players[i];
            const game = new Game(player1, player2, generateRounds());
        }
    }
}

function play(players) {
    // fac starts at 2 to skip the repeated players rounds
    let fac = 2;
    for (let i = 0; i < players.length; i++) {
        let player1 = players[i];
        runAllPlayers(fac, player1, players);
        fac++;
    }
}

// console.log(generateRounds());

console.log(players);
play(players);
console.log("Starting game\n\n");
game.playGame();
console.log("Game ended\n\n");
console.log("\n\n#############################################################\n\n");
console.log("\n\nRESULTS\n\n");
game.getResults();
console.log("\n\n#############################################################\n\n");
console.log("\n\n!!! WINNER !!!\n\n");
game.getWinner();