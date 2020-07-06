import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {products} from 'products';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  products = products;
 public myID = 'testID';
 public dis = 'true';
 public classStyle = 'success-class';
 public hasError = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { }
}
