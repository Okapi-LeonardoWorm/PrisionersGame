import play1 from './Players/play1.js';
import cheatAlways from './Players/play-1.js';
import playAlternate from './Players/playAlternate.js';
import playEnemyOpposite from './Players/playEnemyOpposite.js';
import playLeo from './Players/PlayerLeo.js';


const players = [playLeo, playEnemyOpposite]; // Array of players
const rounds = 235; // Number of rounds to play


function generateRounds(average = rounds, random = true) {
    // console.log("\n####### generateRounds #######\n");

    if (random) {
        return Math.floor(Math.random() * 10 + average);
    }
    return Math.floor(average);
}


class Game {
    constructor(player1, player2, rounds) {
        this.roundsToPlay = rounds;
        
        this.player1 = player1;
        this.player1Score = 0;
        
        this.player2 = player2;
        this.player2Score = 0;

        this.rounds = [];
        this.scores = [];
        
        console.log("\n\n#############################################################\n\n");
        console.log("##========> Starting game <========##\n\n");
        console.log(`${this.player1.name} vs ${this.player2.name}\n\n`);
        this.playGame();
        console.log("Game ended\n\n");
        
        console.log("\n\n#############################################################\n\n");
        console.log("\n\nRESULTS\n\n");
        this.getResults();
        
        console.log("\n\n#############################################################\n\n");
        console.log("\n\n!!! WINNER !!!\n\n");
        this.getWinner();
    }

    playRound(p1mv, p2mv) {
        // console.log("\n####### playRound #######\n");

        if (p1mv === 1 && p2mv === 1) {
            this.player1Score = this.player1Score + 3;
            this.player2Score = this.player2Score + 3;

            this.scores.push([3,3]);
        } else if (p1mv === -1 && p2mv === -1) {
            this.player1Score = this.player1Score + 1;
            this.player2Score = this.player2Score + 1;

            this.scores.push([1,1]);
        } else if (p1mv === 1 && p2mv === -1) {
            this.player1Score = this.player1Score + 0;
            this.player2Score = this.player2Score + 5;

            this.scores.push([0,5]);
        } else if (p1mv === -1 && p2mv === 1) {
            this.player1Score = this.player1Score + 5;
            this.player2Score = this.player2Score + 0;

            this.scores.push([5,0]);
        }
        // console.log("\n## Scores ##\n");
        
        // console.log(`${this.player1.name} played: ${p1mv}`);
        // console.log(`${this.player2.name} played: ${p2mv}`);
        
        // console.log(`${this.player1.name} scored: ${this.scores[this.scores.length -1][0]}`);
        // console.log(`${this.player2.name} scored: ${this.scores[this.scores.length -1][1]}`);

        // console.log(`${this.player1.name} current Score: ${this.player1Score}`);
        // console.log(`${this.player2.name} current Score: ${this.player1Score}`);
        
        this.rounds.push([p1mv, p2mv]);

        return [this.player1Score, this.player2Score];
    }

    playGame() {
        // console.log("\n####### playGame #######\n");

        let p1mv;
        let p2mv;

        for (let round = 0; round < this.roundsToPlay; round++) {
            if (round == 0) {
                p1mv = this.player1.firstMove;
                p2mv = this.player2.firstMove;

                console.log("\n##>> First ROUND <<##\n");

                // this.playRound(p1mv, p2mv);
            } else{
                p1mv = this.player1.strategy(this.rounds[round-1][1]);
                p2mv = this.player2.strategy(this.rounds[round-1][0]);
            }
            this.playRound(p1mv, p2mv);
        }
    }

    getResults() {
        // console.log("\n####### getResults #######\n");
        
        console.log(`Player 1: ${this.player1.name} - ${this.player1Score} points\n\n`);
        console.log(`Player 2: ${this.player2.name} - ${this.player2Score} points\n\n`);
        console.log(`Rounds: ${this.rounds}\n\n`);
        console.log(`Scores: ${this.scores}\n\n`);
    }
    
    getWinner() {
        // console.log("\n####### getWinner #######\n");

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
    // console.log("\n####### runAllPlayers #######\n");

    for (let pl2 =0; pl2 < players.length; pl2++) {
        if (fac > 1) {
            fac--;
            continue;
        } else {
            let player2 = players[pl2];
            const game = new Game(player1, player2, generateRounds());
        }
    }
}

function play(players) {
    // console.log("\n####### play #######\n");

    // fac starts at 2 to skip the repeated players rounds
    let fac = 2;
    for (let pl1 = 0; pl1 < players.length; pl1++) {
        let player1 = players[pl1];
        runAllPlayers(fac, player1, players);
        fac++;
    }
}

// console.log(generateRounds());

play(players);