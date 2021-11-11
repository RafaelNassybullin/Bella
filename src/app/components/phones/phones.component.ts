import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-phones',
  template: `
    <section>
      <div class="images">
        <div class="img-one">
          <div class="shadow"></div>
          <img src="../../../assets/img/left.webp" alt="">
        </div>
        <div class="img-two">
          <div class="shadow"></div>
          <img src="../../../assets/img/right.webp" alt="">
        </div>
      </div>
      <div class="how-it-works">
        <div class="border"></div>
        <h1>{{title}}</h1>
      </div>
    </section>
  `,
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  title!:string

}
