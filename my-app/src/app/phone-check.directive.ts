import { Directive } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS , AsyncValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';


export function uniquePhoneValidator(userService: EnrollmentService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.getUserByPhone(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'appPhoneCheck': true } : null;
      })
    );
  };
}
@Directive({
  selector: '[appPhoneCheck]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: PhoneCheckDirective, multi: true }]

})
export class PhoneCheckDirective implements AsyncValidator {

  constructor(private userService: EnrollmentService) { }
  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniquePhoneValidator(this.userService)(c);
  }
}
