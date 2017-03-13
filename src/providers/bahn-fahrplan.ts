import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const APIKEY = "";
const STUTTGARTHBF = "008000096";
const BASEURI = "/bahnproxy";

@Injectable()
export class BahnFahrplan {

  constructor(public http: Http) {
    if (APIKEY === "") {
      alert("*API AuthKey Error*: Enter Auth Key in bahn-fahrplan.ts");
    } else {
      console.log('Hello BahnFahrplan Provider');
    }
  }

  /**
   * DB Fahrplan Departure
   * URL: https://open-api.bahn.de/bin/rest.exe/departureBoard?authKey=APIKEY&format=json&lang=de&id=STATIONID
   */
  departures() {
    let departureUri = BASEURI+"/departureBoard?authKey="+APIKEY+"&format=json&lang=de&id="+STUTTGARTHBF;
    return new Promise((resolve, reject) => {
      this.http.get(departureUri)
        .map(res => res.json())
        .subscribe(
          (data) => {
            resolve(data); 
          },
          (err) => {
            reject(err); 
          }
        )
    }); 
  }
}
