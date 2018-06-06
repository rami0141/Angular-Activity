import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// angular needs to know where the things are
//Angular gets started and it tells angular there is this AppComponent to read
// package from the form packag
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
