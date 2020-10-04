import { Guid } from 'guid-typescript';

export class UserForRegistration {
  constructor(public firstName: string, public lastName: string, public email: string, public password: string) {}
}

export class UserDto {
  id: Guid;
  firstName: string;
  lastName: string;
  email: string;
}
