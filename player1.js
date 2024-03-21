// player always play cooperatively
class Player{
    constructor(name, strategy){
        this.name = name;
        this.strategy = strategy;
        this.firstMove = 1;
        this.enemyMoves = [];
    }
}

function strategy(lastEnemyMove){
    // Create your strategy here
    
    this.enemyMoves.push(lastEnemyMove);
    return 1;
}


// const player1 = new Player("cooperateAlways", strategy);
