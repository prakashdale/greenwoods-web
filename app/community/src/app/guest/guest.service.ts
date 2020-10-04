import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { UserDto, UserForRegistration } from './guest.models';
import { GuestInMemoryApiService, GuestApiService, IApiService } from './guest.api.service';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  constructor(private apiService: GuestInMemoryApiService) { }

  registerUser(user: UserForRegistration): Observable<UserDto> {
    return this.apiService.registerUser(user);
  }
  login(email: string, password: string): Observable<UserDto> {
    return this.apiService.login(email, password);
  }
}
