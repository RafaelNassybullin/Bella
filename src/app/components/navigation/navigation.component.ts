import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <div class="logo"><a routerLink="/"><img src="../../../assets/img/logo.png" alt=""></a></div>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/products">Product</a></li>
        <li><a routerLink="/faq">Faq</a></li>
        <li><a routerLink="/contacts">Contact</a></li>
      </ul>
    </nav>`,
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
