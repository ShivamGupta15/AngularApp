import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';


@Component({
  selector: 'app-formspage',
  templateUrl: './formspage.component.html',
  styleUrls: ['./formspage.component.css']
})
export class FormspageComponent implements OnInit {

 topics = ['Angular', 'Vue', 'Express'];
 userModel = new User('Shivam', 'infosys.shivam@gmail.com', 786663, 'Angular');

  constructor(private enrollmentservice: EnrollmentService) { }
  onSubmit(){
    this.enrollmentservice.enroll(this.userModel).subscribe(data => console.log( 'success', data), error => console.error( 'Error', error));
  }

  ngOnInit(): void {

  }

}
