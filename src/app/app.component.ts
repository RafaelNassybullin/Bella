import {Component} from '@angular/core';
import {myAnimation} from "./router-animations";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>

    <div [@myAnimation]="getRouterOutletState(o)">
        <router-outlet #o="outlet"></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],
  animations:[myAnimation]
})
export class AppComponent {
  title = 'ngRxStore';

  constructor() {}

  public getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  //инжектить сервис с данными

}
