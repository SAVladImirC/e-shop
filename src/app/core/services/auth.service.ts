import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registeredUsers: User[] = [];

  constructor() { 
    this.registeredUsers.push(new User("admin", "admin", "admin@test.com", "admin", ""));
  }
}
