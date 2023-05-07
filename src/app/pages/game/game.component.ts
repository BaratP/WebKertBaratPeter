import {Component, HostListener, OnDestroy } from '@angular/core';
import {ScoreObject} from "../../shared/constants";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnDestroy {
  reactionTime;
  randomdelay;
  milisecs;
  date;
  interval: any;
  bestTime;
  clicked;
  constructor() {
    this.clicked = false;
    this.reactionTime =0 ;
    this.randomdelay = Math.floor(Math.random() * 3) + 3;
    this.milisecs = 0;
    this.date = new Date().toISOString();
    this.bestTime=999999;
  }
  ngOnDestroy() {
    this.reactionTime=0;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'w' && this.milisecs!==0) {
      this.reactionTime=this.milisecs;
      if (this.reactionTime<this.bestTime) this.bestTime=this.reactionTime
      clearInterval(this.interval);
      this.milisecs=0;
      this.clicked=false;
      const index = ScoreObject.findIndex(obj => obj.id === 'Player');
      if (index !== -1) {
        ScoreObject[index].date = this.date;
        ScoreObject[index].score = this.reactionTime.toString()+"ms";

      }
    }
  }

  start() {
    this.clicked=true;
    setTimeout(() => {
      this.randomdelay = Math.floor(Math.random() * 3) + 3;
      this.interval = setInterval(() => {
        this.milisecs++;
      }, 1);
    }, this.randomdelay * 1000);
  }
}
