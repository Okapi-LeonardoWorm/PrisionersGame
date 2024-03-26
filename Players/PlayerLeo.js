class Player{
    constructor(name){
        this.name = name;
        this.strategy = this.strategy;
        this.firstMove = 1;
        this.enemyMoves = [];
        this.hit = 0;
        this.flag = 0;
        this.fgv = 0;
        this.count = 0;

    }

    strategy(lastEnemyMove){
        // Create your strategy here
        this.enemyMoves.push(lastEnemyMove);

        if (lastEnemyMove == -1) {
            this.flag += 1;
            this.hit = 2;
        } else {
            if (this.flag > 0) {
                this.flag -= 1;
            }
            this.count += 1;
            if (this.count > 5) {
                this.count = 0;
                return -1
            }
            return 1;            
        }
        if (this.flag >= 3) {
            return -1   
        }
        if (this.hit > 0) {
            if (this.fgv < 2) {
                this.fgv += 1;
                this.hit -= 1;
                return -1;
            } else { 
                this.hit = 0;
                return 1;
            } 
        }

        return 1;
    }
}


const player = new Player("PlayerLeo");
export default player;