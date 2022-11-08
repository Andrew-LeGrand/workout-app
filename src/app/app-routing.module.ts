import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { PlannerComponent } from './planner/planner.component';

const routes: Routes = [
  { path: '', redirectTo: '/exercises', pathMatch: 'full'},
  { path: 'exercises', component: ExercisesComponent },
  { path: 'planner', component: PlannerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
