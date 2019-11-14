import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  ws: WebSocket;

  constructor() { }

  Counter = new BehaviorSubject<number>(0);
  private subject = new Subject<any>();

  public count = 0;
  addToCart(count) {
    this.subject.next(count + 1);

    // this.Counter.next(count+1);
  }

  clearCart() {
    // this.Counter.next(0);
    this.subject.next(0);
  }

  getCart(): Observable<any> {
    return this.subject.asObservable();
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
