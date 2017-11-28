import { Component} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent {

  login: string;
  passwd: string;
  isLogged: boolean = false;

  constructor() { }

  onSubmit() {
    this.isLogged = true;
  }

  logout(){
    this.isLogged = false;
  }

}
