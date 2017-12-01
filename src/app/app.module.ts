import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { TripsDisplayComponent } from './trips-display/trips-display.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthentificationService } from './services/index';

@NgModule({
  declarations: [
    AppComponent,
    TripsDisplayComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
