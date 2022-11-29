import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Exercise } from '../shared/exercise/exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  exerciseSelected = new Subject<Exercise>();
  exerciseListChanged = new Subject<Exercise[]>();

  private myExercises: Exercise[] = [];

  constructor() {}

  getExercises() {
    return this.myExercises.slice();
  }

  getExercise(idx: number) {
    return this.myExercises.slice()[idx];
  }

  createExercise(exercise: Exercise) {
    this.myExercises.push(exercise);
    console.log(this.myExercises);
    this.exerciseListChanged.next(this.myExercises.slice());
  }

  removeExercise(idx: number) {
    if (idx !== -1) {
      this.myExercises.splice(idx, 1);
      this.exerciseListChanged.next(this.myExercises.slice());
    }
  }

  setExercises(exercises: Exercise[] | []) {
    this.myExercises = exercises || [];
    this.exerciseListChanged.next(this.myExercises.slice());
  }
}
