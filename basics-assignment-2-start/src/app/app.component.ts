import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: '';

  constructor() {

  }

  checkName(name: string) {
    if (name === undefined) {
      return true;
    } else {
      return false;
    }
  }

  updateName() {
    this.username = '';
  }
}
