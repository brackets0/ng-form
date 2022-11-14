import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { MenuComponent } from './menu/menu.component';
import { FormRxjsReactiveFormComponent } from './form-rxjs-reactive-form/form-rxjs-reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormMaterialComponent } from './form-material/form-material.component';
import { CommonModule } from '@angular/common';
import { FormTemplateComponent } from './form-template/form-template.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormReactiveComponent,
    FormRxjsReactiveFormComponent,
    FormMaterialComponent,
    FormTemplateComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
