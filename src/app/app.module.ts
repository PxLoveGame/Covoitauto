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
import { TripsSearchComponent } from './trips-search/trips-search.component';
import { TripsCreateComponent } from './trips-create/trips-create.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'create', component: TripsCreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TripsDisplayComponent,
    LoginComponent,
    RegisterComponent,
    TripsSearchComponent,
    TripsCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ //penser a exports les modules dans les features modules, (ceux qui seront utiliser par le module parent)
    RouterModule
  ],
  providers: [AuthentificationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
