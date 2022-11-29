import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    return this.onFetchExercises()
  }

  onSaveExercises() {
    this.httpService.saveExercisesToDatabase();
  }

  onFetchExercises() {
    this.httpService.fetchExercisesFromDatabase();
  }
}
