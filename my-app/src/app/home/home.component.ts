import { Component, OnInit } from '@angular/core';
import { SmartphonesService } from '../smartphones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// public imgpath = "assets/img/download.jpg";
  constructor(private Smartphone: SmartphonesService) // parameter for accessing Smartphone service
  { }
//  color = 'yellow';
  // bcolor= 'orange';
  public smartphones = [];

  ngOnInit() {
    this.smartphones = this.Smartphone.callSmartPhone();
  }

}
