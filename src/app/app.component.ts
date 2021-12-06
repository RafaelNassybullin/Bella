import {AfterViewChecked, Component} from '@angular/core';
import {myAnimation} from "./router-animations";
import {RouterOutlet} from "@angular/router";
import {AppService} from "./app.service";

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
  animations: [myAnimation]
})
export class AppComponent implements AfterViewChecked {
  constructor(public t: AppService) {
  }

  ghjj() {
    setTimeout(() => this.t.tj = true, 200)
  }

  goRouterAnimaton(outlet: RouterOutlet) {
    return this.t.tj && outlet && outlet.activatedRoute;
  }

  ngAfterViewChecked() {
    this.ghjj()
  }


}
