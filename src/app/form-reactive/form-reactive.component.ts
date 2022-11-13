import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  template: `
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
  constructor(private fb: FormBuilder) {
    this.reativeForm = fb.group({
      name: new FormControl(),
      phone: new FormControl(),
      check: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  updateform = () => {
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
  console.log(form);
 }

}
