class TicTacToe {
    constructor() {
        this.field = [];
        for (let i = 0; i < 3; i++) {
            this.field[i] = [];
         }
        this.symbol = true;
        this.winningCombinations = [
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            [[0, 2], [1, 1], [2, 0]],
            [[0, 0], [1, 1], [2, 2]]
        ]
    }

    getCurrentPlayerSymbol() {
        return this.symbol ? 'x' : 'o';        
    }

    nextTurn(rowIndex, columnIndex) {   
        if (this.field[rowIndex][columnIndex] === undefined){
            this.field[rowIndex][columnIndex] = this.symbol;
            this.symbol = !this.symbol;
        }          
    }

    isFinished() {
        if (this.getWinner() !== null || this.isDraw() === true) {
            return true;
        } else return false;
    }

    getWinner() {
        for (let i = 0; i < this.winningCombinations.length; i++) {
            let combination = this.winningCombinations[i];
            let cell1 = this.field[combination[0][0]][combination[0][1]];
            let cell2 = this.field[combination[1][0]][combination[1][1]];
            let cell3 = this.field[combination[2][0]][combination[2][1]];
            
            if (cell1 !== undefined && cell2 !== undefined && cell3 !== undefined && cell1 === cell2 && cell1 === cell3) {
                    return cell1 ? 'x' : 'o';
                } 
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] === undefined) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if (this.getWinner() === null && this.noMoreTurns() === true) {
            return true;
        }
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        let cell = this.field[rowIndex][colIndex];
        return cell !== undefined ? cell ? 'x' : 'o' : null;
    }
}

module.exports = TicTacToe;
