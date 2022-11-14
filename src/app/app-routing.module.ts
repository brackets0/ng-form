import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormMaterialComponent } from './form-material/form-material.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { FormRxjsReactiveFormComponent } from './form-rxjs-reactive-form/form-rxjs-reactive-form.component';
import { FormTemplateComponent } from './form-template/form-template.component';

const routes: Routes = [
  { path: '', component: FormReactiveComponent },
  { path: 'form-template', component: FormTemplateComponent },
  { path: 'form-reactive-rxjs', component: FormRxjsReactiveFormComponent },
  { path: 'form-material', component: FormMaterialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
