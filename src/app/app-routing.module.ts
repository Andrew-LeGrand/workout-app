import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { PlannerComponent } from './planner/planner.component';
import { RoutinesComponent } from './routines/routines.component';
import { ExerciseDetailsComponent } from './shared/exercise-details/exercise-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/routines', pathMatch: 'full' },
  { path: 'routines', component: RoutinesComponent },
  {
    path: 'exercises',
    component: ExercisesComponent,
    children: [{ path: ':id', component: ExerciseDetailsComponent }],
  },
  { path: 'planner', component: PlannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
