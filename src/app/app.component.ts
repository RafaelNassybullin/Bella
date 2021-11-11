import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>


    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngRxStore';

  constructor() {}

  //инжектить сервис с данными

}
