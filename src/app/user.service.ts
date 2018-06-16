import { Injectable } from '@angular/core';
import { User } from './user';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  getUsers(): Observable<User[]> {
    return this.db.list<User>('/users').valueChanges();
  }

  setScore(userId: number, newScore: number): void {
    this.db.object(`/users/${userId}/score`).set(newScore);
  }
}
