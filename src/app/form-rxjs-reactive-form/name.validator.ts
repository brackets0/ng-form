import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { FormRxjsReactiveFormService } from './form-rxjs-reactive-form.service';

@Injectable({
  providedIn: 'root',
})
export class NameAvailableValidator implements AsyncValidator {
  constructor(private formRxjsReactiveFormService: FormRxjsReactiveFormService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.formRxjsReactiveFormService.checkNameAvailable(control.value).pipe(
      map((isAvailable) => (isAvailable ? null : { nameAvailable: true })),
      catchError(() => of(null))
    );
  }
}
