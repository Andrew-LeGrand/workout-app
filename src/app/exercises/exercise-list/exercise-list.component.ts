import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Exercise } from 'src/app/shared/exercise/exercise.model';
import { ExerciseService } from 'src/app/exercises/exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css'],
})
export class ExerciseListComponent implements OnInit, OnDestroy {
  @Output() currentExerciseSelected = new EventEmitter<Exercise>();
  myExercises: Exercise[];
  exerciseSub: Subscription;

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit(): void {
    this.exerciseSub = this.exerciseService.exerciseListChanged.subscribe(
      (exercises: Exercise[]) => {
        this.myExercises = exercises;
      }
    );
    this.myExercises = this.exerciseService.getExercises();
  }

  onAddExercise(exercise: Exercise) {
    this.exerciseService.createExercise(exercise);
    this.exerciseService.getExercises();
  }

  onRemoveExercise(idx) {
    this.exerciseService.removeExercise(idx);
  }

  ngOnDestroy(): void {
    this.exerciseSub.unsubscribe();
  }
}
