import { Injectable } from '@angular/core';
import { Exercise } from '../shared/exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercises: Exercise[] = [
    new Exercise(
      'Barbell Bench Press',
      6,
      4,
      'data:image/jpeg;base64,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',
      225
    ),
    new Exercise(
      'Bicep Curls',
      12,
      4,
      'data:image/png;base64,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',
      30
    ),
  ];

  constructor() {}
}