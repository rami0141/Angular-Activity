// Need to export it so you can use it outside of this file
// Import the component decorator
// angular/core package gives us access to core features
import { Component } from '@angular/core';

//Component decorator
@Component({
  //pass a javascript object to this decorator to configure it
  // will be stored as meta data
  //html tag to use - selector should be a string
  selector: 'app-server',
  //reference a file
  templateUrl: './server.component.html'
})

export class ServerComponent {

}