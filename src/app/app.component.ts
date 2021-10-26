import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piton-lms';
  items: Observable<any>;
  constructor(db: AngularFireDatabase ){
    this.items = db.object('item').valueChanges();
    console.log(this.items)
  }
}
