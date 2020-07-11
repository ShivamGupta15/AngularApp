import { Directive, ElementRef, Input } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS , AsyncValidatorFn} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { EnrollmentService } from './enrollment.service';
//

export function uniqueEmailValidator(userService: EnrollmentService): AsyncValidatorFn {
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.getUserByEmail(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'appEmailCheck': true } : null;
      })
    );
  };
}


@Directive({
  selector: '[appEmailCheck]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: EmailCheckDirective, multi: true }]
})

export class EmailCheckDirective implements AsyncValidator {

  constructor(private userService: EnrollmentService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return uniqueEmailValidator(this.userService)(c);
  }
}
