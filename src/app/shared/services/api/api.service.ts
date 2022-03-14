import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Animals } from './animals.interface';

const API = 'https://61f12139072f86001749f044.mockapi.io/api/v1/animals';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  animals!: Animals | undefined;

  constructor(private http: HttpClient) { }

  getAnimals(): Observable<Animals>{
    return this.http.get<Animals>(API).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  showAnimals(){
    this.animals = undefined;
    this.getAnimals().subscribe((animals)=>{
      this.animals = animals;
      // Limit the number of items for the purpose of this assignment.
      this.animals.items = this.animals.items.slice(0, 6);
    })
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
