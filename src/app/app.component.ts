import {Component, Input} from '@angular/core';

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
    <app-instruction [data2]="data"></app-instruction>
    <app-hero
      [titleHero]="'Download the app now.'"
      [paragraphHero]="'Available on your favorite store. Start your premium experience now'"
      [imgHero]="'../../../assets/img/62e47d4ba6308cc4a1c5c2d5a9ad2351.jpg'"
      [back]="'#252B4266'"
    ></app-hero>

    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngRxStore';

  constructor() {}

  //инжектить сервис с данными
  @Input()
  data = [
    {
      upTitles:'Create an account',
      titles:'Create/login to an existing account to get started',
      paragraph:'An account is created with your email and a desired password',
      image:'../../../assets/img/e174a423b04a9efcc4191e8d7ff471ac.png',
      reverted:false
    },
    {
      upTitles:'Explore varieties',
      titles:'Shop for your favorites meal as e dey hot.',
      paragraph:'Shop for your favorite meals or drinks and enjoy while doing it.',
      image:'../../../assets/img/9deab65a0825abc73cb16299b4d86970.png',
      reverted:true
    },
    {
      upTitles:'Checkout',
      titles:'When you done check out and get it delivered.',
      paragraph:'When you done check out and get it delivered with ease.',
      image:'../../../assets/img/897e2e23f0fcbe24ad9aa1958337eedb.png',
      reverted:false
    },
  ]



}
