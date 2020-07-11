import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { Subscription } from 'rxjs';
//import { checkServerIdentity } from 'tls';


@Component({
  selector: 'app-formspage',
  templateUrl: './formspage.component.html',
  styleUrls: ['./formspage.component.css']
})
export class FormspageComponent implements OnInit {
TopicHasError = true;

responsegot: string;

 topics = ['Angular', 'Vue', 'Express'];
 userModel = new User('Shivam', 'Sincere@april.biz', 7844047843, 'default');
  valTopic(x) {
    if (x === 'default') {
      this.TopicHasError = true;
    }
    else {
      this.TopicHasError = false;
    }
  }

 logs(x){
  console.log(x);
}


  constructor(private userService: EnrollmentService) { }

  /*onSubmit(){
   //check()
    this.enrollmentservice.enroll(this.userModel).subscribe(res =>
      {this.responsegot = res.message; console.log('responsegot: ' + this.responsegot); });
    console.log('submitted');
    console.log('response: ' + typeof(this.responsegot));
    console.log('response: ' + this.responsegot);
   
  }*/

  ngOnInit(): void {
    this.userService.getUsers().subscribe();

  }

}
