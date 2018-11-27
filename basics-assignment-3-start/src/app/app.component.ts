import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  secretPassword = 'Tuna';
  passwordVisible = false;
  logs = [];

  addLog() {
    const today = new Date();
    this.logs.push(today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds());
  }

  showSecretCode() {
    this.passwordVisible = !this.passwordVisible;
  }

  getLogs() {
    return this.logs.length >= 5 ? 'blue' : '';
  }

}
