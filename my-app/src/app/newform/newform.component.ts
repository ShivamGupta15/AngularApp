import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {

  constructor() { }
  log(x){
    console.log(x);
  }
  ngOnInit(): void {
  }

}
