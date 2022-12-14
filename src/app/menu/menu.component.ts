import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-menu',
  template: `
    <ng-container *ngIf="(points$ | async) as points">
      <ul class="list-group">
        <li class="list-group-item" *ngFor="let point of points">
          <a routerLink="{{ point.url }}" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">{{ point.title }}</a>
        </li>
      </ul>
    </ng-container>
  `,
  styles: [`
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
    }
    li {
      padding-left: 10px;
    }
  `]
})
export class MenuComponent {
  points = [
    {
      title: 'form-reactive',
      url: '/form-reactive',
    },
    {
      title: 'form-template',
      url: '/form-template',
    },
    {
      title: 'form-reactive-rxjs',
      url: '/form-reactive-rxjs',
    },
    {
      title: 'form-rxjs',
      url: '/form-rxjs',
    },
    {
      title: 'form-component-store',
      url: '/form-component-store',
    },
    {
      title: 'form-material',
      url: '/form-material',
    },
    {
      title: 'form-formly',
      url: '/form-formly',
    },
    {
      title: 'form-rxjs-forms',
      url: '/form-rxjs-forms',
    },
  ];
  points$ = of(this.points);
  constructor() { }

}
