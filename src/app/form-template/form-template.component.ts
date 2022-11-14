import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  template: `
    <form  (ngSubmit)="submit(templateForm)" #templateForm="ngForm">
      <input type="text" name="name" ngModel>
      <input type="number" name="phone" ngModel>
      <input type="checkbox" name="check" ngModel>
      <button type="submit">submit</button>
    <form>
  `,
  styles: [
  ]
})
export class FormTemplateComponent {

  constructor() { }

  submit(form: NgForm) {
    console.log(form.form.value);
  }

}
