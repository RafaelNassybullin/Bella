import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {


  public toggleBurger:boolean = false

  public tj: boolean = false

  toggleBurgerMethod(){
    this.toggleBurger = !this.toggleBurger
  }
  f(){
    this.toggleBurger = false
  }

  constructor() {
  }
}
