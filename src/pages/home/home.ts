import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BahnFahrplan } from '../../providers/bahn-fahrplan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  departures: any[] = [];
  station: string;

  constructor(public navCtrl: NavController, public bahnFahrplan: BahnFahrplan) {
    this.station = "Stuttgart Hbf";
    this.refresh();
  }

  refresh() {
    this.bahnFahrplan.departures()
    .then((data: any) => {
      this.departures = data.DepartureBoard.Departure;
      console.log("Departures", this.departures);
    })
    .catch((err) => { alert("Departure Error: "+err); });
  }

}
