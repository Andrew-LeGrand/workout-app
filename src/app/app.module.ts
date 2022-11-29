import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseListComponent } from './exercises/exercise-list/exercise-list.component';
import { ExerciseDetailsComponent } from './shared/exercise-details/exercise-details.component';
import { PlannerComponent } from './planner/planner.component';
import { ExerciseComponent } from './shared/exercise/exercise.component';
import { ExerciseEditComponent } from './shared/exercise-edit/exercise-edit.component';
import { PlannerListComponent } from './planner/planner-list/planner-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutinesComponent } from './routines/routines.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExercisesComponent,
    ExerciseListComponent,
    ExerciseDetailsComponent,
    PlannerComponent,
    ExerciseComponent,
    ExerciseEditComponent,
    PlannerListComponent,
    RoutinesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
