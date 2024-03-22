// player always play oppositely to last enemy move
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
        
        return lastEnemyMove * -1;
    }
}


const player = new Player("playerEnemyOpposite");
export default player;
