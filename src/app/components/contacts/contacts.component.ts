import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  template: `
  <div  class="example-page">


    <img src="../../../assets/img/contact.jpg" alt="">

      <h1>Contact example page</h1>

    </div>
  `,
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
