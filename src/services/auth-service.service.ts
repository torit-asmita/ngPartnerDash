import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<User>;
  constructor(private router: Router,private http:HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>((localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
   }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

 
  login(email_mobile: string, password: string)
  {
    return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { email_mobile, password })
    .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
    }));
  }
  logout() {
    // remove user from local storage to log user out
    
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}
}
