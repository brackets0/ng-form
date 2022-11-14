import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NameAvailableValidator } from '../form-rxjs-reactive-form/name.validator';

@Component({
  selector: 'app-form-material',
  template: `
    <form [formGroup]="matForm" (submit)="submit()">
      <!-- <mat-form-field class="form-field" appearance="outline">
        <mat-label>Name</mat-label>
        <input matInput formControlName="name" required>
        <mat-error *ngIf="matForm.controls['name'].touched && matForm.controls['name'].invalid">
          <span *ngIf="matForm.controls['name'].errors.required">This field is mandatory.</span>
          <span *ngIf="matForm.controls['name'].errors.pattern">This field is invalid.</span>
        </mat-error>
      </mat-form-field>
      <mat-form-field class="form-field" appearance="outline">
        <mat-label>Phone</mat-label>
        <input matInput formControlphone="phone" required>
        <mat-error *ngIf="matForm.controls['phone'].touched && matForm.controls['phone'].invalid">
          <span *ngIf="matForm.controls['phone'].errors.required">This field is mandatory.</span>
          <span *ngIf="matForm.controls['phone'].errors.pattern">This field is invalid.</span>
        </mat-error>
      </mat-form-field>
      <mat-checkboxm matInput formControlphone="checkbox">Check</mat-checkbox> -->
    </form>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMaterialComponent implements OnInit {
  matForm: FormGroup;
  name = ['', Validators.required, this.nameAvailableValidator.validate.bind(
    this.nameAvailableValidator
  ),];
  phone = new FormControl("", Validators.required);
  check = new FormControl("", Validators.required);
  
  constructor(
    private formBuilder: FormBuilder,
    private nameAvailableValidator: NameAvailableValidator,
  ) {
    this.matForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {}

  submit() {
    if (!this.matForm.valid) {
      return;
    }
    console.log(this.matForm.getRawValue());
   }

}
