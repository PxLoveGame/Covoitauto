import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { TripsDisplayComponent } from './trips-display/trips-display.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    TripsDisplayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
