import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';

import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  events: Observable<any[]>;
  constructor(private db:AngularFireDatabase) { }

  fetchEvent(){
   return this.db.list('events').valueChanges();
  }
}
