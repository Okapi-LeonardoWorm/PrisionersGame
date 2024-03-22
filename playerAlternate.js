// player always play oppositely to it last move
class Player{
    constructor(name){
        this.name = name;
        this.strategy = this.strategy;
        this.firstMove = 1;
        this.enemyMoves = [];
    }

    strategy(lastEnemyMove){
        // Create your strategy here
        this.enemyMoves.push(lastEnemyMove);
        this.firstMove *= -1;
        return this.firstMove;
    }
}


const player = new Player("playerAlternate");
export default player ;
