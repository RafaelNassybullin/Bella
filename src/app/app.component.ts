import {Component} from '@angular/core';
import {myAnimation} from "./router-animations";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
        <div [@myAnimation]="goRouterAnimaton(o)">
            <router-outlet #o="outlet"></router-outlet>
        </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss'],
  animations:[myAnimation]
})
export class AppComponent{

 goRouterAnimaton(outlet: RouterOutlet) {

    return outlet && outlet.activatedRoute;
  }

  //outlet && outlet.activatedRoute
  //инжектить сервис с данными

}
