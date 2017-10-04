import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'game-board',
  templateUrl: 'game-board.html'
})
export class GameBoardComponent {

  @Input() gameWidth;

  // index: number;
  @Input() isXTurn;
  lastPlayerIsX: boolean = this.isXTurn;
  gameReportArr: any[] = [];
  @Output() onGameReportArrayUpdated = new EventEmitter<{ gameReportArr: any[] }>();
  @Output() onPlayerPlayedEvent = new EventEmitter<boolean>();

  @Input()
  set updateGameBoard(updateCell: { cellIndex: number, gamePlayed: string }) {
    this.cellToBeUpdated = updateCell;
    if (this.cellToBeUpdated) {
      this.isXTurn = !this.isXTurn;

    }
  }

  cellToBeUpdated: { cellIndex: number, gamePlayed: string } = null;
  constructor() {

  }

  setXO(obj) {
    this.isXTurn = !this.isXTurn;
  }


  onCellOccupied(obj: any) {
    if (obj) {
      if (obj.playerType == 0) {
        this.gameReportArr[obj.cellNumber] = obj.cellNumber;
      }
      else if (obj.playerType == 1) {
        this.gameReportArr[obj.cellNumber] = 'o';
      }
      else {
        this.gameReportArr[obj.cellNumber] = 'x';
      }

      this.onGameReportArrayUpdated.emit({ gameReportArr: this.gameReportArr });

    }
  }

  onPlayerPlayed(obj: any) {
    this.onPlayerPlayedEvent.emit(true);

  }
}
