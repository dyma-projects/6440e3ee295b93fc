import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  constructor() {}

  public addUser(username: string): void {
    const currentUsers = this.users$.value;
    currentUsers.push(username);
    this.users$.next(currentUsers);
  }
}
