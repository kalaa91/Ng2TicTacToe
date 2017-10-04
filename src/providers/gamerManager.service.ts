import { Injectable } from '@angular/core';

@Injectable()
export class GameManagerService {
    player: string;
    computer: string;
    gameType: number;
    playMatrix: any[] = [];
    constructor() {

    }

    getGameOriginalPlayMatrix(): any[] {
        if (this.gameType == 5) {
            this.playMatrix = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        }
        else if (this.gameType == 4) {
            this.playMatrix = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        }
        else {
            this.playMatrix = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        }
        return this.playMatrix;
    }



    //check if there is a current win in the board
    checkWinSituation(inputArr, moveType) {
        let matrix = this.listToMatrix(inputArr, this.gameType);

        let matrixLength = matrix.length;
        //check all rows
        //check all columns
        for (var i = 0; i < matrixLength; i++) {
            let rowResult = this.getRow(matrix, i);
            if (this.checkWinningArray(rowResult, moveType)) {
                return true;
            }
            let colResult = this.getCol(matrix, i);
            if (this.checkWinningArray(colResult, moveType)) {
                return true;
            }
        }

        //check left diagonal
        let leftDiag = this.getLeftDiag(matrix);
        if (this.checkWinningArray(leftDiag, moveType)) {
            return true;
        }
        //check right diagonal
        let rightDiag = this.getRightDiag(matrix);
        if (this.checkWinningArray(rightDiag, moveType)) {
            return true;
        }


        return false;
    }

    listToMatrix(list, elementsPerSubArray) {
        let matrix = [], i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }

            matrix[k].push(list[i]);
        }

        return matrix;
    }

    //check if a row or column all have the same move type i.e. wining array
    checkWinningArray(rowOrCol, moveType) {
        let result = rowOrCol.filter(cellValue => cellValue == moveType);
        if (result.length == rowOrCol.length) {
            return true;
        }
        else {
            return false;
        }
    }

    //get column by number from two dimensional array
    getCol(matrix, col) {
        var column = [];
        for (var i = 0; i < matrix.length; i++) {
            column.push(matrix[i][col]);
        }
        return column;
    }

    //get row by number from two dimensional array
    getRow(matrix, row) {
        var result = [];
        for (var i = 0; i < matrix.length; i++) {
            result.push(matrix[row][i]);
        }
        return result;
    }

    //get left Diagonal part [0,0]..[1,1]..[2,2] from two dimensional array
    getLeftDiag(matrix) {
        var result = [];
        for (var i = 0; i < matrix.length; i++) {
            result.push(matrix[i][i]);
        }
        return result;
    }

    //get right Diagonal part [0,2]..[1,1]..[2,0] from two dimensional array
    getRightDiag(matrix) {
        var result = [];
        for (var i = 0; i < matrix.length; i++) {
            result.push(matrix[i][matrix.length - i - 1]);
        }
        return result;
    }

    calculateBestMove(playMatrix, currentPlayer) {
        //implementing minimax algorithm
        //check for terminal states
        //get available play cells
        //recurse through the matrix and empty cells to calculate the highest and lowest score according to who is playing

        //get available playing cells
        var availablePlayingCells = this.getMatrixEmptyCells(playMatrix);

        // checks for the terminal states such as win, lose, and tie and returning a value accordingly
        if (this.checkWinSituation(playMatrix, this.player)) {
            return { outcome: -10 };
        }
        else if (this.checkWinSituation(playMatrix, this.computer)) {
            return { outcome: 10 };
        }
        else if (availablePlayingCells.length === 0) {
            return { outcome: 0 };
        }

        // an array to collect all Minimax possible plays
        let minimaxPlaysCollection = this.getMiniMaxPossibleMoves(availablePlayingCells, playMatrix, currentPlayer);


        // assing play with highest score to computer and lowest to opponent
        let bestPlay = null;
        if (currentPlayer === this.computer) {
            var bestOutCome = -10000;
            for (var i = 0; i < minimaxPlaysCollection.length; i++) {
                if (minimaxPlaysCollection[i].outcome > bestOutCome) {
                    bestOutCome = minimaxPlaysCollection[i].outcome;
                    bestPlay = i;
                }
            }
        } else {
            let bestOutCome = 10000;
            for (let i = 0; i < minimaxPlaysCollection.length; i++) {
                if (minimaxPlaysCollection[i].outcome < bestOutCome) {
                    bestOutCome = minimaxPlaysCollection[i].outcome;
                    bestPlay = i;
                }
            }
        }

        // return the chosen move (object) from the array to the higher depth
        return minimaxPlaysCollection[bestPlay];
    }

    getMiniMaxPossibleMoves(freeCells, playMatrix, currentPlayer) {
        let possibleMoves = []
        for (let i = 0; i < freeCells.length; i++) {
            //create an object for each and store the index of that spot that was stored as a number in the object's index key
            //for each free cell , calculate cell outcome and index
            let play = { index: null, outcome: null };
            play.index = playMatrix[freeCells[i]];

            // set cell to current player
            playMatrix[freeCells[i]] = currentPlayer;

            //if collect the score resulted from calling minimax on the opponent of the current player
            if (currentPlayer == this.computer) {
                let result = this.calculateBestMove(playMatrix, this.player);
                play.outcome = result.outcome;
            }
            else {
                let result = this.calculateBestMove(playMatrix, this.computer);
                play.outcome = result.outcome;
            }

            //clear cell
            playMatrix[freeCells[i]] = play.index;

            // push the object to the array
            possibleMoves.push(play);
        }

        return possibleMoves;
    }

    getMatrixEmptyCells(matrix) {
        return matrix.filter(s => s != "o" && s != "x");
    }

}