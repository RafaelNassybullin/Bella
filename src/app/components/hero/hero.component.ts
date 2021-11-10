import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <main>
      <img [src]="imgHero"  alt="">
      <div class="text" [ngStyle]="{background:back}">
        <h3>{{uppendTitleHero}}</h3>
        <h1>{{titleHero}}</h1>
        <p>{{paragraphHero}}</p>
        <div class="buttons">
          <button>Playstore</button>
          <button>App store</button>
        </div>
      </div>
    </main>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input()
  uppendTitleHero!:string
  @Input()
  titleHero!:string
  @Input()
  paragraphHero!:string
  @Input()
  imgHero!:string
  @Input()
  back!:string
}
