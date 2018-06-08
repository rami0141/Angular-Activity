// Need to export it so you can use it outside of this file
// Import the component decorator
// angular/core package gives us access to core features
import { Component } from '@angular/core';

//Component decorator
@Component({
  //pass a javascript object to this decorator to configure it
  // will be stored as meta data
  //html tag to use - selector should be a string and unique
  selector: 'app-server',
  //reference a file
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent {
  // declaration of number and string is not required
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    // If the random number is greater than 0.5 - status will be online
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    // if serverStatus is online, I will get green if not it will be red
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
