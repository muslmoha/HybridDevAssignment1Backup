import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  

  constructor(private http: HttpClient) { }

  @Output() myData: any;
  @Output() provincialData: any;
  @Output() vaccineData: any;
  @Output() sharedTXT: any;
  message = new BehaviorSubject('');
  sharedMessage = this.message.asObservable();


  loadData(){
    if(this.myData == null){
      var url = "assets/data/National.json";
      var test: any[];
      let obs = this.http.get<any>(url);
      obs.subscribe((response)=>{test = response; this.myData = test});
     // this.newMessage(this.myData);
    }
  }

  loadProvincialData(){
    if(this.provincialData == null){
      var url = "assets/data/Provincial.json";
      var test: any[];
      let obs = this.http.get<any>(url);
      obs.subscribe((response)=>{test = response; this.provincialData = test});
    }
  }

  loadVaccineData(){
    if(this.vaccineData == null){
      var url = "assets/data/VaccineData.json";
      var test: any[];
      let obs = this.http.get<any>(url);
      obs.subscribe((response)=>{test = response; this.vaccineData = test});
      //this.newMessage(this.vaccineData);
    }
  }

  reloadVacData(){
    var url = "assets/data/VaccineData.json";
    var test: any[];
    let obs = this.http.get<any>(url);
    obs.subscribe((response)=>{test = response; this.vaccineData = test});
  }

  newMessage(msg){
    this.message.next(msg);
  }
}
