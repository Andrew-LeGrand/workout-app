import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExerciseService } from '../exercises/exercise.service';
import { Exercise } from './exercise/exercise.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  firebaseRootURL = 'https://workout-app-61fa3-default-rtdb.firebaseio.com/';

  constructor(
    private http: HttpClient,
    private exersiceService: ExerciseService
  ) {}

  saveExercisesToDatabase() {
    const exercises = this.exersiceService.getExercises();

    this.http
      .put(this.firebaseRootURL + 'exercises.json', exercises)
      .subscribe((res) => {
        console.log('Firebase DB Response:', res);
      });
  }

  fetchExercisesFromDatabase() {
    return this.http
      .get(this.firebaseRootURL + 'exercises.json', {})
      .subscribe((res: Exercise[] | []) => {
        this.exersiceService.setExercises(res);
      });
  }
}
