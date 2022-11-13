import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

const routes: Routes = [
  { path: '', component: FormReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
