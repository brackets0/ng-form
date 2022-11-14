import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  template: `
    <h4>app-form-reactive</h4>
    <form [formGroup]="reativeForm" (ngSubmit)="submit(reativeForm)">
      <input formControlName="name">
      <input formControlName="phone">
      <input formControlName="check">
      <button type="submit">submit</button>
    <form>
  `,
  styles: [
  ]
})
export class FormReactiveComponent implements OnInit {
  reativeForm: FormGroup;
  name = new FormControl("", Validators.required);
  phone = new FormControl("", Validators.required);
  check = new FormControl("", Validators.required);

  constructor(private fb: FormBuilder) {
    this.reativeForm = this.fb.group({
      name: this.name,
      phone: this.phone,
      check: this.check,
    });
  }

  ngOnInit(): void {
  }

  updateform = (data: any) => {
    this.reativeForm.patchValue({
      // new data config
    });
 }

 resetForm = () => {
   this.reativeForm.reset();
 }

 getFormValues = (): object => { 
   return this.reativeForm.value;
 }

 submit(form: FormGroup) {
  console.log(this.reativeForm.getRawValue());
  console.log(form);
 }

}
