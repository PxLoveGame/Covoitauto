import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-search',
  templateUrl: './trips-search.component.html',
  styleUrls: ['./trips-search.component.css']
})
export class TripsSearchComponent implements OnInit {

	villeD : string;
	villeA : string;
	dateT : Date;
	cpt : number = 0;

	correspondTrips : Object[] = [];

	//à retirer une fois la bdd fonctionnel
	trips: Object[] = [
    {"startCity":"Montpellier", "endCity":"Avignon", "date":"12/25/2017", "place":"0"},
    {"startCity":"Montpellier", "endCity":"Paris", "date":"01/01/2018", "place":"2"},
    {"startCity":"Nice", "endCity":"Lyon", "date":"12/20/2017", "place":"2"},
    {"startCity":"Nice", "endCity":"Lyon", "date":"10/20/2017", "place":"1"}
  ];

  constructor() { }

  ngOnInit() {

  }

	searchTrips(){
  		for(var i = 0; i< this.trips.length; i++){
			if(this.trips[i]['startCity'] === this.villeA && this.trips[i]['endCity'] === this.villeD && this.trips[i]['date'] === this.dateT && this.trips[i]['place']>0){
				this.correspondTrips[i] = '{"startCity":' +'"this.villeA", "endCity":' +'"this.villeD", "date":' + '"this.dateT", "place":' + '"this.trips[i][place]"}';
				this.cpt++;
			}
		}
  	}
}
