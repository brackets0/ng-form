import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, map } from 'rxjs';
import { FormRxjsReactiveFormService } from './form-rxjs-reactive-form.service';
import { NameAvailableValidator } from './name.validator';

@Component({
  selector: 'app-form-rxjs-reactive-form',
  template: `
    <ng-container *ngIf="reativeRxjsForm.statusChanges | async"></ng-container>
      <div class="p-4">
        <h4>app-form-rxjs-reactive-form</h4>
        <form [formGroup]="reativeRxjsForm" (ngSubmit)="submit()" #form="ngForm">
          <div class="form-group">
            <label type="text" for="name">name</label>
            <input class="form-control" formControlName="name" />
            <span *ngIf="reativeRxjsForm.controls['name'].statusChanges | async as status">
              {{ status }}
            </span>
            <small 
              class="form-text text-muted"
              *ngIf="
                !reativeRxjsForm.controls['name'].valid &&
                (reativeRxjsForm.controls['name'].touched || form.submitted)
              "
            >
              Please provide a name that is not taken
            </small>
          </div>
          <div class="form-group">
            <label type="number" for="phone">phone</label>
            <input class="form-control" formControlName="phone" />
          </div>
          <div class="form-group">
            <label type="checkbox" for="check">check</label>
            <input class="form-control" formControlName="check" />
          </div>
          <button type="submit" class="btn btn-primary mt-2" [disabled]="reativeRxjsForm.controls['name'].pending">submit</button>
        </form>
      </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRxjsReactiveFormComponent implements OnInit {
  reativeRxjsForm: FormGroup;
  name = ['', Validators.required, this.nameAvailableValidator.validate.bind(
    this.nameAvailableValidator
  ),];
  phone = new FormControl("", Validators.required);
  check = new FormControl("", Validators.required);

  constructor(
    private fb: FormBuilder,
    private nameAvailableValidator: NameAvailableValidator,
    private cdr: ChangeDetectorRef,
  ) {
    this.reativeRxjsForm = this.fb.group({
      name: this.name,
      phone: this.phone,
      check: this.check,
    });

    this.reativeRxjsForm.valueChanges.pipe(
      filter(form => form.get('name').valid),
      filter(data => this.reativeRxjsForm.valid),
      map((formData) => {
        formData.lastUpdateTS = new Date();
        return formData
      })
    );
  }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Mark as touched');
      this.reativeRxjsForm.controls['name'].markAsTouched();
      this.reativeRxjsForm.updateValueAndValidity();
    }, 3000);
  }

  submit= () => {
    console.log(this.reativeRxjsForm.getRawValue());
  }
}
