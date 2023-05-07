import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import {GameComponent} from "./game.component";
import {DateFormatPipe} from "../../shared/pipes/date-format.pipe";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    GameComponent,
    DateFormatPipe
  ],
    exports: [
        GameComponent,
        DateFormatPipe,
    ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class GameModule { }
