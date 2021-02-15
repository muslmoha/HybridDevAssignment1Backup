import { Component, Input, OnInit } from '@angular/core';
import { DatashareService } from '../../datashare.service';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.scss'],
})
export class NationalComponent implements OnInit {
  
  
    message: any;
  
    constructor(private datashare: DatashareService) { }
  
    ngOnInit() {
      this.datashare.sharedMessage.subscribe(
        message => this.message = message
      );
      this.datashare.loadData();
    }
  
  }