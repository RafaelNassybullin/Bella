import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-instruction',
  template: `
    <section *ngFor="let item of data2">
      <div class="wrapper">
        <div class="image" [ngStyle]="{order: item.reverted ?1:'unset'}">
          <div class="shadow"></div>
          <img [src]="item.image" alt="">
        </div>
        <div class="text">
          <h3>{{item.upTitles}}</h3>
          <h1>{{item.titles}}</h1>
          <p>{{item.paragraph}}</p>
        </div>
      </div>

    </section>`,
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.data2);
  }

  @Input()
  reverce!: string

  @Input()
  data2!:any


}
