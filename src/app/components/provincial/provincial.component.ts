import { Component, Input, OnInit } from '@angular/core';
import { DatashareService } from '../../datashare.service';

@Component({
  selector: 'app-provincial',
  templateUrl: './provincial.component.html',
  styleUrls: ['./provincial.component.scss'],
})
export class ProvincialComponent implements OnInit {
  
  message: any;

  constructor(private datashare: DatashareService) { }

  ngOnInit() {
    this.datashare.sharedMessage.subscribe(
      message => this.message = message
    );
    this.datashare.loadProvincialData();
  }

}
