import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { PlayerType } from '../../providers/playerType.enum';
import { PlayerTypeAware } from '../../providers/playerType.decorator';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'board-cell',
    templateUrl: 'board-cell.html'
})
@PlayerTypeAware
export class BoardCellComponent implements OnChanges {

    @Input() cellIndex: number;
    @Input() isXTurn: boolean = false;

    @Input()
    set updateCell(updateCell: { cellIndex: number, gamePlayed: string }) {
        if (updateCell && updateCell.cellIndex == this.cellIndex) {
            if (updateCell.gamePlayed == 'o') {
                this.playerType = PlayerType.O;
            }
            else {
                this.playerType = PlayerType.X;
            }
            this.isCellAvailable = false;
            this.onCellOccupied.emit({ cellNumber: this.cellIndex, playerType: this.playerType, isCellAvailable: false });
        }
    }

    playerType: PlayerType = PlayerType.Empty;
    isCellAvailable: boolean = true;
    @Output() onCellOccupied = new EventEmitter<{ cellNumber: number, playerType: PlayerType, isCellAvailable: boolean }>();
    @Output() onPlayerPlayed = new EventEmitter<boolean>();
    constructor() {
    }

    setXO(event) {
        if (this.isCellAvailable) {
            if (this.isXTurn) {
                this.playerType = PlayerType.X;
            }
            else {
                this.playerType = PlayerType.O;
            }
            this.isCellAvailable = false;

            this.onCellOccupied.emit({ cellNumber: this.cellIndex, playerType: this.playerType, isCellAvailable: false });
            this.onPlayerPlayed.emit(true);
        }
    }

    ngOnChanges(changes: SimpleChanges) {
    }
}
