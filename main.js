
const players = []; // Array of players
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
    }

    playRound(p1mv, p2mv) {
        if (p1mv === 1 & p2mv === 1) {
            this.player1Score += 3;
            this.player2Score += 3;

            this.scores.push([3,3]);
        } else if (p1mv === -1 & p2mv === -1) {
            this.player1Score += 1;
            this.player2Score += 1;

            this.scores.push([1,1]);
        } else if (p1mv === 1 & p2mv === -1) {
            this.player1Score += 0;
            this.player2Score += 5;

            this.scores.push([0,5]);
        } else if (p1mv === -1 & p2mv === 1) {
            this.player1Score += 5;
            this.player2Score += 0;

            this.scores.push([5,0]);
        }

        this.rounds.push([p1mv, p2mv]);

        return [this.player1Score, this.player2Score];
    }

    playGame() {
        for (let i = 0; i < this.rounds; i++) {
            if (i === 0) {
                let p1mv = this.player1.firstMove;
                let p2mv = this.player2.firstMove;

                this.playRound(p1mv, p2mv);
            } else{
                let p1mv = this.player1.strategy(this.rounds, this.rounds[i]);
                let p2mv = this.player2.strategy(this.rounds, this.rounds[i]);
    
                this.playRound(p1mv, p2mv);
            }
        }
    }
}


function play(fac, player1, players) {
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

function runAllPlayers(players) {
    const fac = 2;
    for (let i = 0; i < players.length; i++) {
        play(fac, players[i], players);
        fac++;
    }
}

// console.log(generateRounds());
