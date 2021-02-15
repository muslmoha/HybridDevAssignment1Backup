import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  message: any;
  vaccineData: any;
  p1message: any;

  constructor(private datashare: DatashareService, private router: Router) { }

  // goP1(date){
  //   this.router.navigate(['page1', date])
  //   // const sendData: NavigationExtras = {
  //   //   state:{vacData: this.test}
  //   // };
  //   // this.router.navigate(['page1'], sendData);
  //   // console.log(sendData);
  //   //.then(nav =>{
  //    // console.log(nav);}, err =>{ console.log(err)});
  // }

  ngOnInit() {
    this.datashare.sharedMessage.subscribe(
      message => this.message = message
    );
    this.datashare.loadVaccineData();
    console.log(this.message);
  }
}
