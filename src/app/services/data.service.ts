import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  comp1Data = new Subject();
  subscribe: any;

  constructor(private cartservice: CartService) {

    // this.callSocket('');
  }

  callSocket(url) {
    // this.subscribe = this.cartservice.createwebSocket(url).pipe().subscribe((data: any) => {
    //   this.changeMessage(data);
    // });
  }

  changeMessage(message: string) {

    this.comp1Data.next(message);

  }
  closeSocket() {
    // this.subscribe = this.cartservice.closeWebSocket()
  }

  ngOnDestroy() {
    // this.subscribe.unsubscribe();
  }
}
