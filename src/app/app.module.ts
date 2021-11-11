import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeroComponent } from './components/hero/hero.component';
import { PhonesComponent } from './components/phones/phones.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    PhonesComponent,
    InstructionComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    FaqComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
