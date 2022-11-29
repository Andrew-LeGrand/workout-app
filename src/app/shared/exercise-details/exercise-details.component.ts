import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ExerciseService } from 'src/app/exercises/exercise.service';
import { Exercise } from '../exercise/exercise.model';

@Component({
  selector: 'app-exercise-details',
  templateUrl: './exercise-details.component.html',
  styleUrls: ['./exercise-details.component.css'],
})
export class ExerciseDetailsComponent implements OnInit {
  exercise: Exercise;
  idx: number;

  constructor(
    private exerciseService: ExerciseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.exercise = this.exerciseService.getExercise(this.idx);
    });
  }

}
