import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormRxjsReactiveFormService {
  constructor() { }

  checkNameAvailable(name: string) {
    return of(false).pipe(delay(1000));
  }
}
