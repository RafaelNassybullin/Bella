import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <div class="logo"><a href="#"><img src="../../../assets/img/logo.png" alt=""></a></div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Faq</a></li>
        <li><a href="#">Contact</a></li>
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
