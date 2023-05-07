import { Component } from '@angular/core';
import {ScoreObject} from "../../shared/constants";
export interface Player {
  name: string;
  score: number;
}
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  scoreObject: any = ScoreObject;
}
