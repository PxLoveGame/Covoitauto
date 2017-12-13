import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-create',
  templateUrl: './trips-create.component.html',
  styleUrls: ['./trips-create.component.css']
})
export class TripsCreateComponent implements OnInit {

	villeD : string;
	villeA : string;
	dateT : Date;
	nbPlace : string;
	cpt : int = 0;

	constructor() { }

	ngOnInit() {

	}

	createTrip(){
  		//push dans la bdd
  	}

}
