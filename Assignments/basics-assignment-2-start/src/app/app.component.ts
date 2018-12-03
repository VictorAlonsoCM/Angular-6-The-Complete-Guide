import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  username2 = '';
  emptyUsername = false;

  isEmptyUsername() {
    // Ternary Operator equals = condition ? true : false;
    this.emptyUsername = this.username === '' ? false : true;
  }
  setEmptyUsername() {
    this.username = '';
    this.isEmptyUsername();
  }
}
