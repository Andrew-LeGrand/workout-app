import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  @Input() exercise: Exercise;

  constructor() {}

  ngOnInit(): void {}
}
