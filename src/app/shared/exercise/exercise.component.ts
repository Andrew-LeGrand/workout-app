import { Component, Input, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/exercises/exercise.service';
import { Exercise } from './exercise.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  @Input() exercise: Exercise;
  @Input() idx: number;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit(): void {}

  onExerciseSelected() {
    this.exerciseService.exerciseSelected.next(this.exercise);
  }
}
