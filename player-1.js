// player always play cheat
class Player{
    constructor(name){
        this.name = name;
        this.strategy = this.strategy;
        this.firstMove = -1;
        this.enemyMoves = [];
    }
    strategy(lastEnemyMove){
        // Create your strategy here
        
        this.enemyMoves.push(lastEnemyMove);
        return -1;
    }
}


const player = new Player("cheatAlways");
export default player;