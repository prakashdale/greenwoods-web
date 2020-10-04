import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { UserDto, UserForRegistration } from './guest.models';
import { DBContext, User } from '../app.db';
import { Guid } from 'guid-typescript';



export interface IApiService {
  registerUser(usr: UserForRegistration): Observable<UserDto>;
  login(email: string, password: string): Observable<UserDto>;
}

@Injectable({
  providedIn: 'root'
})
export class GuestApiService implements IApiService {

  constructor() { }
  login(email: string, password: string): Observable<UserDto> {
    throw new Error('Method not implemented.');
  }
  registerUser(user: UserForRegistration): Observable<UserDto> {
    throw new Error('Method not implemented.');
  }
}


@Injectable({
  providedIn: 'root'
})
export class GuestInMemoryApiService implements IApiService {
  db: DBContext;

  constructor() {
    this.db = new DBContext();
  }
  login(email: string, password: string): Observable<UserDto> {
    const users = this.db.Users.table.filter(x => x.email === email);
    if (users.length === 0) {
      return throwError({
        email: 'Invalid email address'
      });
    }
    const user = users[0];
    if (user.password !== password) {
      return throwError({
        password: 'Invalid password'
      });
    }

    return of(user).pipe(delay(1000));
  }

  registerUser(usr: UserForRegistration): Observable<UserDto> {
    const users = this.db.Users.table.filter(x => x.email === usr.email);
    if (users.length > 0) {
      return throwError({
        email: 'Email already in use'
      });
    }
    const record = new User();
    record.id = Guid.create();
    record.firstName = usr.firstName;
    record.lastName = usr.lastName;
    record.email = usr.email;
    record.password = usr.password;


    this.db.Users.addEntity(record);
    const retVal = of(record).pipe(delay(1000));
    return retVal;
  }
}
