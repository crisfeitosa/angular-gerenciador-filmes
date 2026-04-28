import { Component, input } from '@angular/core';
import { MoviesListResponse } from '../../../../shared/types/movies-list-response';

@Component({
  selector: 'app-movies-filter',
  imports: [],
  templateUrl: './movies-filter.html',
  styleUrls: ['./movies-filter.css'],
})
export class MoviesFilter {
  movies = input<MoviesListResponse>([]);
}
