import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import {ScoreComponent} from "./score.component";
import {GameModule} from "../game/game.module";


@NgModule({
  declarations: [
    ScoreComponent
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule,
    GameModule
  ]
})
export class ScoreModule { }
