import { Component } from '@angular/core';

@Component({
  // selector property - assigns a string as a value and the string holds app-root
  // this is the info angular needsto be able to replace the <app-root> with the template of this component inside app.component.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
