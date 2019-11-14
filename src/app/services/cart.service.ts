import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ws: WebSocket;

  constructor() { }

  Counter = new BehaviorSubject<number>(0);

  public count = 0;
  addToCart(count) {
    this.Counter.next(count+1);
  }

  clearCart() {
    this.Counter.next(0);
  }

  // createwebSocket(url: string): Observable<string> {
  //   this.ws = new WebSocket(url);
  //   return new Observable(observer => {
  //     this.ws.onerror = (event) => observer.error(event);
  //     this.ws.onmessage = (event) => observer.complete();

  //     this.ws.onopen = (event) => {

  //       if (this.ws.readyState === 1) {

  //       }
  //       this.ws.onmessage = (event) => {
  //         observer.next(event.data);
  //       };
  //     };

  //   });
  // }

  // closeWebSocket(){
  //   this.ws.close();
  // }

  // sendMessages(message) {
  //   if (this.ws.readyState === 1) {
  //     this.ws.send(JSON.stringify(message));
  //   }
  // }

}
