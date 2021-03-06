import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  // each component needs to have it's own template
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // don't want to allow the user to create a new server
  allowNewServer = false;
  serverCreationStatus = "No server was created!"
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2']

  constructor() {
    // after 2000 milliseconds = 2 seconds
    setTimeout(() => {
    this.allowNewServer = true;
  }, 2000)
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = ' Server was created!  Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    // Output what the user typed
    // will be an HTML input element
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
