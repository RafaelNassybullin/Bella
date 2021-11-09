import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <app-hero [uppendTitleHero]="'Food app'"
              [titleHero]="'Why stay hungry when you can order form Bella Onojie'"
              [paragraphHero]="'Download the bella onoje’s food app now on'"
              [imgHero]="'../../../assets/img/51c51a7e2807a7d0fadb9f1c2a8b1ef6.jpg'"
    ></app-hero>
    <app-phones [title]="'How the app works'"></app-phones>
    <app-hero
      [titleHero]="'Download the app now.'"
      [paragraphHero]="'Available on your favorite store. Start your premium experience now'"
      [imgHero]="'../../../assets/img/62e47d4ba6308cc4a1c5c2d5a9ad2351.jpg'"
    ></app-hero>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngRxStore';
  constructor() {}
  //инжектить сервис с данными
}
