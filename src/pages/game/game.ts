import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlayerType } from '../../providers/playerType.enum';
import { PlayerTypeAware } from '../../providers/playerType.decorator';
import { GameManagerService } from '../../providers/gamerManager.service';

@Component({
    selector: 'page-game',
    templateUrl: 'game.html',
    providers: [GameManagerService]
})
@PlayerTypeAware
export class GamePage {
    startTurn: boolean;
    gameType: number;
    playMatrix: any[] = [];
    cellToBeUpdated: { cellIndex: number, gamePlayed: string } = null;


    constructor(public navCtrl: NavController, private navParams: NavParams, private gameManagerService: GameManagerService) {
        let startWith = navParams.get('startWith');
        this.gameType = navParams.get('gameType');

        this.gameManagerService.computer = 'x';
        this.gameManagerService.player = 'o';
        this.gameManagerService.gameType = this.gameType;
        this.playMatrix = this.gameManagerService.getGameOriginalPlayMatrix();

        if (startWith == 'x') { //computer Start
            this.startTurn = true;
            this.makeComputerPlay();
        }
        else { //human start
            this.startTurn = false;
        }
    }

    onGameReportArrayUpdated(obj: any) {
        for (let i = 0; i < obj.gameReportArr.length; i++) {
            if (obj.gameReportArr[i]) {
                this.playMatrix[i] = obj.gameReportArr[i];
            }
        }
    }

    makeComputerPlay() {
        let gameResult = this.gameManagerService.calculateBestMove(this.playMatrix, this.gameManagerService.computer);
        this.cellToBeUpdated = { cellIndex: gameResult.index, gamePlayed: 'x' };
    }

    onPlayerPlayed(obj: any) {
        this.makeComputerPlay();
    }




}
