import { Component, input } from '@angular/core';
import { MoviesListResponse } from '../../types/movies-list-response';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-movies-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.css'],
  host: {
    class: 'flex-1 min-h-0',
  },
})
export class MoviesList {
  BASE_PATH = environment.baseUrl;

  movies = input<MoviesListResponse>([]);
}
