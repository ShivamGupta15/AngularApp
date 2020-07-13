import { Component, OnInit, ElementRef } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { Subscription } from 'rxjs';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { NgForm, FormControl } from '@angular/forms';
//import { checkServerIdentity } from 'tls';


@Component({
  selector: 'app-formspage',
  templateUrl: './formspage.component.html',
  styleUrls: ['./formspage.component.css'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 0 })),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(4000)
      ])
    ])
  ]
})
export class FormspageComponent {
  TopicHasError = true;
  responsegot: boolean;
  toastShow = false;
  myForm: FormControl;
  topics = ['Angular', 'Vue', 'Express'];
  userModel = new User(null, null, null, 'default');
  //hide toast func
  fade() {
    return this.toastShow = false;
  }
  valTopic(x) {
    if (x === 'default') {
      this.TopicHasError = true;
    }
    else {
      this.TopicHasError = false;
    }
  }


  logs(x) {
    console.log(x);
  }


  constructor(private userService: EnrollmentService) { }



  onSubmit() {
    this.userService.enroll(this.userModel).subscribe(res => {
      this.responsegot = res.message;
      if (this.responsegot === true) {
        this.toastShow = true;


      }
      console.log('responsegot: ' + this.responsegot);
    });
    console.log('submitted');
    console.log('response: ' + typeof (this.responsegot));
    console.log('response: ' + this.responsegot);


  }

  //ngOnInit(): void {
  //this.userService.getUsers().subscribe(res => console.log(res));

  //}

}
