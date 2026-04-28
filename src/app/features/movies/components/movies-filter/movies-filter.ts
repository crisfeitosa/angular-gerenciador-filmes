import { Component, input } from '@angular/core';
import { MoviesListResponse } from '../../../../shared/types/movies-list-response';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-movies-filter',
  imports: [JsonPipe],
  templateUrl: './movies-filter.html',
  styleUrls: ['./movies-filter.css'],
})
export class MoviesFilter {
  movies = input<MoviesListResponse>([]);
}
