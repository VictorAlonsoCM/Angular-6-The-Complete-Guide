import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  /*template: `
  <app-server></app-server>
  <app-server></app-server>`, */
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverName2 = 'TestServer';
  classes = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      this.classes = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!, Name is ' + this.serverName2;
  }
  // event binding
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
