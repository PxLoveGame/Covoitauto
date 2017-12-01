import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TripsDisplayComponent } from './trips-display/trips-display.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthentificationService, UserService } from './services/index';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TripsDisplayComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthentificationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
