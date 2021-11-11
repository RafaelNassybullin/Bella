import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="home">

    <app-hero [uppendTitleHero]="'Food app'"
              [titleHero]="'Why stay hungry when you can order form Bella Onojie'"
              [paragraphHero]="'Download the bella onoje’s food app now on'"
              [imgHero]="'../../../assets/img/main.jpg'"
    ></app-hero>

    <app-phones [title]="'How the app works'"></app-phones>
    <app-instruction [data2]="data"></app-instruction>

    <app-hero [titleHero]="'Download the app now.'"
              [paragraphHero]="'Available on your favorite store. Start your premium experience now'"
              [imgHero]="'../../../assets/img/pre-footer.jpg'"
              [back]="'#252B4266'"
    ></app-hero>

  </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input()
  data = [
    {
      upTitles:'Create an account',
      titles:'Create/login to an existing account to get started',
      paragraph:'An account is created with your email and a desired password',
      image:'../../../assets/img/e174a423b04a9efcc4191e8d7ff471ac.webp',
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
      image:'../../../assets/img/897e2e23f0fcbe24ad9aa1958337eedb.webp',
      reverted:false
    },
  ]
}
