import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatashareService } from '../../datashare.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  vaccineData: any;
  message: any;
  data: any;
  prevDay: any;
  totalDose: any;
  totalDoseVac: any;
  totalpplVac: any;

  
  constructor(private sharedService: DatashareService, private route: ActivatedRoute) { 
  }

  ngOnInit() {
    this.sharedService.sharedMessage.subscribe(
      message => this.message = message
    );
    this.sharedService.loadVaccineData();
    this.data = this.route.snapshot.params.parm;
    for(var d in this.sharedService.vaccineData){
      if(this.sharedService.vaccineData[d].report_date == this.data){
        this.prevDay = this.sharedService.vaccineData[d].previous_day_doses_administered;
        this.totalDose = this.sharedService.vaccineData[d].total_doses_administered;
        this.totalDoseVac = this.sharedService.vaccineData[d].total_individuals_fully_vaccinated;
        this.totalpplVac = this.sharedService.vaccineData[d].total_doses_in_fully_vaccinated_individuals;
      }
    }
  }

  setMessage(){
    this.sharedService.newMessage(this.message);
  }
  
}