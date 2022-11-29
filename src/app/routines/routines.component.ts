import { Component, OnInit } from '@angular/core';
import { Exercise } from '../shared/exercise/exercise.model';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.css']
})
export class RoutinesComponent implements OnInit {

  myRoutines: Exercise[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
