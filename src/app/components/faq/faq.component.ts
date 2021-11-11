import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  template: `
    <div class="example-page">
<img src="../../../assets/img/faq.jpg" alt="">
      <h1>Faq example page</h1>

    </div>



  `,
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
