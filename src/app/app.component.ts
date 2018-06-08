import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  // selector property - assigns a string as a value and the string holds app-root
  // this is the info angular needsto be able to replace the <app-root> with the template of this component inside app.component.html
  selector: 'app-root',
  templateUrl: './app.component.html',
  // can add multiple stylesheets here
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
