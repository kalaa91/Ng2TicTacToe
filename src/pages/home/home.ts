import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game'
import { GameManagerService } from "../../providers/gamerManager.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GameManagerService]
})
export class HomePage {
  startWith: string = 'x';
  gameType: number = 3;

  constructor(public navCtrl: NavController, private gameManagerService: GameManagerService) {
  }

  startGame(event) {
    this.navCtrl.setRoot(GamePage, { startWith: this.startWith, gameType: this.gameType });
  }

}
