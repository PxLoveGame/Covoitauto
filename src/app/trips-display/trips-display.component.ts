import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trips-display',
  templateUrl: './trips-display.component.html',
  styleUrls: ['./trips-display.component.css']
})
export class TripsDisplayComponent implements OnInit {

  today : string;
  var1 : string;
  myDate : string;
  newDate : string;
  dateCmp : string;
  dateCmp2 : any[] = [];
  dateF : any;

  trips: Object[] = [
    {"startCity":"Montpellier", "endCity":"Avignon", "date":"12/25/17", "place":"0"}
    {"startCity":"Montpellier", "endCity":"Paris", "date":"01/01/18", "place":"2"}
    {"startCity":"Nice", "endCity":"Lyon", "date":"12/20/17", "place":"2"}
    {"startCity":"Nice", "endCity":"Lyon", "date":"10/20/17", "place":"1"}
  ];

  
  




  constructor() { }

  ngOnInit() {
    this.today = new Date();
    this.dateCmp = new Date(String(this.trips[0].date)).getTime();
    for(var i = 0; i< this.trips.length; i++){
      this.dateF = new Date(this.trips[i].date.format('MM/DD/YYYY'));
      this.dateCmp2.push(new Date(this.dateF).getTime());

      console.log(this.trips[i].date);
    }
  }

}
