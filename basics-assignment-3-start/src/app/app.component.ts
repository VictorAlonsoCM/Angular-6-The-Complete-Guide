import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretP = false;
  i = 0;
  timeStampValue = [];
  log = [];

  logged() {
    this.log.push(this.log.length + 1);
  }

  getColor() {
    if (this.i > 5) {
      return 'blue';
    }
  }
}
