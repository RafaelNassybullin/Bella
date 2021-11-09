import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-phones',
  template: `
    <section>
      <div class="images">
        <div class="img-one">
          <img src="../../../assets/img/f799fc6631b7fc0fb7b47aa62e70711d.png" alt="">
        </div>
        <div class="img-two">
          <img src="../../../assets/img/48c2d30ceb6791639040e20fad31741b.png" alt="">
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
