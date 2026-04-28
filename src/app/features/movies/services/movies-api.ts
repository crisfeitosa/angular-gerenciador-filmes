import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMoviesListResponse } from '../../../shared/types/movies-list-response';

@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
  private readonly _httpClient = inject(HttpClient);

  getMovies() {
    return this._httpClient.get<IMoviesListResponse>('http://localhost:3000/movies');
  }
}
