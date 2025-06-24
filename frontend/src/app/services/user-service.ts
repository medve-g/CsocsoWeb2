import { inject, Injectable } from '@angular/core';
import { LoadingService } from './loading-service';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { apiLink } from '../api/api-link';
import { catchError, finalize, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  http: HttpClient = inject(HttpClient)

  constructor(private loadingService: LoadingService) { }

  createUser(user: User) {
    this.loadingService.setLoading(true);
    return this.http.post(`${apiLink}/registerUser`, user).pipe(
      catchError(error => {
        console.error('User creation failed:', error);
        return throwError(() => error);
      }),

      finalize(() => {
        this.loadingService.setLoading(false);
      })
    )
  }
}
