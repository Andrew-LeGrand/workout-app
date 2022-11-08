import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/shared/exercise.model';

@Component({
  selector: 'app-planner-list',
  templateUrl: './planner-list.component.html',
  styleUrls: ['./planner-list.component.css'],
})
export class PlannerListComponent implements OnInit {
  allExercises: Exercise[] = [
    new Exercise(
      'Bench Press',
      8,
      4,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0cNr_SxJR2JxDula0fY9d_31l0FnrPVy1H1GKPTmdhmNitw3V_shksewWggYjqZUl8M&usqp=CAU',
      225
    ),
    new Exercise(
      'Back Squat',
      4,
      4,
      'data:image/jpeg;base64,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',
      315
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}