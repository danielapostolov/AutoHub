import { Injectable } from '@angular/core';
import { User, UserForAuth } from '../../../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: UserForAuth | null = null;
  userId = this.user?.id;

  get isLogged(): boolean {
    return !!this.user;
  }
  //TODO FIX!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    });

  }

  login(email: string, password: string) {
    return this.http
      .post<UserForAuth>('/api/login', { email, password })
      .pipe(tap((user) => this.user$$.next(user)));
  }

  register(username: string, email: string, tel: string, password: string, rePassword: string) {
    return this.http.post<UserForAuth>('/api/register', { username, email, tel, password, rePassword })
      .pipe(tap((user) => {
        this.user$$.next(user);
      }))

  }

  logout() {

    return this.http
      .post('/api/logout', {})
      .pipe(tap((user) => this.user$$.next(null)));
  }


  getProfile() {
    return this.http
      .get<UserForAuth>('/api/users/profile')
      .pipe(tap((user) => this.user$$.next(user)));
  }

  getFullProfile() {
    return this.http
      .get<User>('/api/users/profile')
  }

  editProfile(username: string, email: string, tel?: string) {
    return this.http.put<UserForAuth>('/api/users/profile', {
      username, email, tel
    }).pipe(tap((user) => this.user$$.next(user)));
  }
  //  TODO check endpoint
}
