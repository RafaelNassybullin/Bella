import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div>
      <app-hero [titleHero]="'Our Products'"
              [imgHero]="'../../../assets/img/products.jpg'"
              [back]="'#F4CA161A'"
    ></app-hero>
    </div>

  `,
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
